import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xahhmbe9e.css';
import '../../css/o/op1eu4bxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xahhmbe9e"/><path class="op1eu4bxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:medal-star-alt"} {...others} />);
}

export default Component;
