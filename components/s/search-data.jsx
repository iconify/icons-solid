import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjo89vpyj.css';
import '../../css/l/lja1fl8ad.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="gjo89vpyj"/><path class="lja1fl8ad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:search-data"} {...others} />);
}

export default Component;
