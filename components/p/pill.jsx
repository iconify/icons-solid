import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/luulaebmy.css';
import '../../css/a/a7mffllux.css';
import '../../css/f/fk2bfybvu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="luulaebmy"/><path class="a7mffllux"/><path class="fk2bfybvu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:pill"} {...others} />);
}

export default Component;
