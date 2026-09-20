import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qq3zk27rk.css';
import '../../css/h/hlp216lkb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qq3zk27rk"/><path class="hlp216lkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:espiral-book-solid"} {...others} />);
}

export default Component;
