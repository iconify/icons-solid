import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvpqzqbqv.css';
import '../../css/p/ph1shwbdp.css';
import '../../css/v/v4b2pp25u.css';
import '../../css/d/d0d7aqbow.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/iu-ut2ehy.css';
import '../../css/i/iyoly3fhu.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="nvpqzqbqv"/><path class="ph1shwbdp"/><path class="v4b2pp25u"/><path class="d0d7aqbow"/><g class="jn8qy4bru"><path class="iu-ut2ehy"/><path class="iyoly3fhu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:womans-boot"} {...others} />);
}

export default Component;
