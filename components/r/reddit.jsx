import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hjh784b5x.css';
import '../../css/c/cx2ml4bxo.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="hjh784b5x"/><path class="cx2ml4bxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:reddit"} {...others} />);
}

export default Component;
