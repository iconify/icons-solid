import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y75ybwfrp.css';
import '../../css/h/hywly5dak.css';
import '../../css/e/ebmdd0qas.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="y75ybwfrp"/><path class="hywly5dak"/><path class="ebmdd0qas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:toggles"} {...others} />);
}

export default Component;
