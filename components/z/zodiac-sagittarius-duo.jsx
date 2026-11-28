import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wyi1gfa0v.css';
import '../../css/b/bvqbbtbxu.css';
import '../../css/u/unco9rq0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wyi1gfa0v"/><path class="bvqbbtbxu"/><path class="unco9rq0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:zodiac-sagittarius-duo"} {...others} />);
}

export default Component;
