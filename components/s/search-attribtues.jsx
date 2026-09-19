import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aukm4obte.css';
import '../../css/u/uub_5lb9t.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="aukm4obte"/><path class="uub_5lb9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:search-attribtues"} {...others} />);
}

export default Component;
