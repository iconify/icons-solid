import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t00mv8b2d.css';
import '../../css/f/ffwe9xbuc.css';

const viewBox = {"width":32,"height":33};
const content = `<g class="ft5dv1b6b"><path class="t00mv8b2d"/><path class="ffwe9xbuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:keycap-5"} {...others} />);
}

export default Component;
