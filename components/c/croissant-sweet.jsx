import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iwabxuw0y.css';
import '../../css/i/ia-a0ho7e.css';
import '../../css/j/jweu39dud.css';
import '../../css/c/c454r3aku.css';
import '../../css/z/zstz28lhn.css';
import '../../css/x/xw0401b9a.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="iwabxuw0y"/><path class="ia-a0ho7e"/><path class="jweu39dud"/><path class="c454r3aku"/><path class="zstz28lhn"/><path class="xw0401b9a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:croissant-sweet"} {...others} />);
}

export default Component;
