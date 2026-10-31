import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cn7ft0bub.css';
import '../../css/p/p0mquqbql.css';
import '../../css/o/oc0-g8x8e.css';
import '../../css/b/bn0h7_b7j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="cn7ft0bub wm-shadow"/><path class="p0mquqbql wm-shadow"/><path class="oc0-g8x8e"/><path class="bn0h7_b7j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:search"} {...others} />);
}

export default Component;
