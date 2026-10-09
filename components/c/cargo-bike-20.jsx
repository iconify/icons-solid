import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vu01-jbtn.css';
import '../../css/r/rspsi8b7x.css';
import '../../css/g/ganklmxwt.css';
import '../../css/e/etikf8b0q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="vu01-jbtn"/><path class="rspsi8b7x"/><path class="ganklmxwt"/><path class="etikf8b0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cargo-bike-20"} {...others} />);
}

export default Component;
