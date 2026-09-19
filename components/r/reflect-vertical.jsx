import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bbpd_gbvv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bbpd_gbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:reflect-vertical"} {...others} />);
}

export default Component;
