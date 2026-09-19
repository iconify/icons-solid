import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8_7k8mch.css';
import '../../css/f/fd4fpfb_f.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="f8_7k8mch"/><path class="fd4fpfb_f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:page-csv"} {...others} />);
}

export default Component;
