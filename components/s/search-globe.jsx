import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mx9blzb3a.css';
import '../../css/i/iabrmvfcy.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="mx9blzb3a"/><path class="iabrmvfcy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:search-globe"} {...others} />);
}

export default Component;
