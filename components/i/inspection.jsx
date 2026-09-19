import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/no_04pbeo.css';
import '../../css/z/zw41ydges.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="no_04pbeo"/><path class="zw41ydges"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:inspection"} {...others} />);
}

export default Component;
