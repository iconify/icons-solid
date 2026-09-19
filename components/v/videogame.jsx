import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q3mptb1ql.css';
import '../../css/h/hlumq0b8m.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q3mptb1ql"/><path class="hlumq0b8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:videogame"} {...others} />);
}

export default Component;
