import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o1wy29y8k.css';
import '../../css/h/hhrsgwhff.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o1wy29y8k"/><path class="hhrsgwhff"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:pharmacy"} {...others} />);
}

export default Component;
