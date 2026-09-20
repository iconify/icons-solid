import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-i9hpw_f.css';
import '../../css/l/l6_kf7bqk.css';

const viewBox = {"width":16,"height":16};
const content = `<defs><path id="SVG9KUSnd8v" class="t-i9hpw_f"/></defs><path class="l6_kf7bqk"/><use href="#SVG9KUSnd8v"/><use href="#SVG9KUSnd8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-css"} {...others} />);
}

export default Component;
