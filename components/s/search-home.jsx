import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aukm4obte.css';
import '../../css/z/zu_0t47tj.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="aukm4obte"/><path class="zu_0t47tj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:search-home"} {...others} />);
}

export default Component;
