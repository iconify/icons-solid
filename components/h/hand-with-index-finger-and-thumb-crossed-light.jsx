import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztj5prbss.css';
import '../../css/z/z7oqzzbjb.css';
import '../../css/i/i8zwbnb2d.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ztj5prbss"/><path class="z7oqzzbjb"/><path class="i8zwbnb2d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:hand-with-index-finger-and-thumb-crossed-light"} {...others} />);
}

export default Component;
