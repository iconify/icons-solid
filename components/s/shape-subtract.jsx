import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mabaapu1g.css';
import '../../css/h/hhh60ljkn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mabaapu1g"/><path class="hhh60ljkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:shape-subtract"} {...others} />);
}

export default Component;
