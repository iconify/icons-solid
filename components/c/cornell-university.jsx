import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv0et_yeu.css';
import '../../css/g/gfzaxkurt.css';

const viewBox = {"width":100,"height":129.378};
const content = `<path class="sv0et_yeu"/><path class="gfzaxkurt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:cornell-university"} {...others} />);
}

export default Component;
