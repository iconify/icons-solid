import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vqrep7bti.css';
import '../../css/g/g60lgdcxk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="vqrep7bti"/><path class="g60lgdcxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:data-analytics"} {...others} />);
}

export default Component;
