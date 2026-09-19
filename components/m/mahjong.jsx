import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nhqbhisui.css';
import '../../css/j/jvlxhcclc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nhqbhisui"/><path class="jvlxhcclc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:mahjong"} {...others} />);
}

export default Component;
