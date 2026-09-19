import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/es8mo68gx.css';
import '../../css/c/cdj2jkbik.css';
import '../../css/p/p91j9gb3y.css';
import '../../css/b/bl5dnqrrh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="es8mo68gx"/><path class="cdj2jkbik"/><path class="p91j9gb3y"/><path class="bl5dnqrrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:inboxtray"} {...others} />);
}

export default Component;
