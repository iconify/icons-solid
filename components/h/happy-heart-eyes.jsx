import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp7g7fret.css';
import '../../css/b/bwibdw4bb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tp7g7fret"/><path class="bwibdw4bb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:happy-heart-eyes"} {...others} />);
}

export default Component;
