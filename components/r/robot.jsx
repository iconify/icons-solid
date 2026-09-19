import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r00p3nbjo.css';
import '../../css/r/r0cgx2bnk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="r00p3nbjo"/><path class="r0cgx2bnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:robot"} {...others} />);
}

export default Component;
