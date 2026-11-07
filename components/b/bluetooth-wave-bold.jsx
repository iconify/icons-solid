import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cx30rnqyk.css';
import '../../css/g/g-qkl-bcv.css';
import '../../css/e/em089opbt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cx30rnqyk"/><path class="g-qkl-bcv"/><path class="em089opbt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:bluetooth-wave-bold"} {...others} />);
}

export default Component;
