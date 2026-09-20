import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flrepsbkq.css';
import '../../css/g/gucia9bih.css';
import '../../css/c/c60jr1bxo.css';
import '../../css/m/mpss-tb8s.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="flrepsbkq"/><path class="gucia9bih"/><path class="c60jr1bxo"/><path class="mpss-tb8s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:plunger"} {...others} />);
}

export default Component;
