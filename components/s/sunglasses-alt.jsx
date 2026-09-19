import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qoxqbl1yl.css';

const viewBox = {"width":32,"height":24};
const content = `<path class="qoxqbl1yl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:sunglasses-alt"} {...others} />);
}

export default Component;
