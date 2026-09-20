import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kat0mybba.css';
import '../../css/k/ky783tb7z.css';
import '../../css/v/vab1bkb9p.css';

const viewBox = {"width":294,"height":229};
const content = `<path class="kat0mybba"/><path class="ky783tb7z"/><path class="vab1bkb9p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:zeabur-dark"} {...others} />);
}

export default Component;
