import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/be-pwkkro.css';
import '../../css/y/y_0jyyb5c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="be-pwkkro"/><path class="y_0jyyb5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:color-palette"} {...others} />);
}

export default Component;
