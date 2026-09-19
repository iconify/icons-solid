import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww4fyqbuj.css';
import '../../css/v/v0u2x7r8m.css';
import '../../css/h/ha-i43dwu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ww4fyqbuj"/><circle class="v0u2x7r8m"/><path class="ha-i43dwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:help"} {...others} />);
}

export default Component;
