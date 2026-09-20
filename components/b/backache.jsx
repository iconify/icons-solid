import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbqjoob4z.css';
import '../../css/q/qq6ksrwnd.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/vp9uskbgq.css';
import '../../css/g/g0aenyz-s.css';
import '../../css/f/fj34exbjx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="gbqjoob4z"/><path class="qq6ksrwnd"/><g class="jn8qy4bru"><path class="vp9uskbgq"/><path class="g0aenyz-s"/></g><path class="fj34exbjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:backache"} {...others} />);
}

export default Component;
