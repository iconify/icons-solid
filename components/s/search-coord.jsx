import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lua0b7fsf.css';
import '../../css/a/aukm4obte.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="lua0b7fsf"/><path class="aukm4obte"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:search-coord"} {...others} />);
}

export default Component;
