import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/o/oaonlnw6t.css';
import '../../css/i/io3v31brp.css';
import '../../css/h/huixymbwb.css';
import '../../css/x/xaj_guban.css';
import '../../css/i/iduct2b3g.css';
import '../../css/y/y47bvrb4w.css';
import '../../css/f/f9e0iudvz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="oaonlnw6t wm-shadow"/><path class="io3v31brp"/><path class="huixymbwb"/><path class="xaj_guban"/><path class="iduct2b3g"/><path class="y47bvrb4w"/><path class="f9e0iudvz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:avatar-teen"} {...others} />);
}

export default Component;
