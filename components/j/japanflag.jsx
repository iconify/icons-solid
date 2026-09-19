import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/at07s5byk.css';
import '../../css/n/n3ikn2b4s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="at07s5byk"/><circle class="n3ikn2b4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:japanflag"} {...others} />);
}

export default Component;
