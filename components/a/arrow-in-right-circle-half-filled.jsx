import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y0d_fibqc.css';
import '../../css/j/jgmlxzbvj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y0d_fibqc"/><path class="jgmlxzbvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-right-circle-half-filled"} {...others} />);
}

export default Component;
