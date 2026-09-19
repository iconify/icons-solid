import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ln2z1rd5k.css';
import '../../css/o/osq-njbwy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ln2z1rd5k"/><path class="osq-njbwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:dino"} {...others} />);
}

export default Component;
