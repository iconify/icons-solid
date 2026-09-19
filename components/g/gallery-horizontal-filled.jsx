import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oia2jebxk.css';
import '../../css/e/emuklcgdw.css';

const viewBox = {"width":24,"height":24};
const content = `<rect class="oia2jebxk"/><path class="emuklcgdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:gallery-horizontal-filled"} {...others} />);
}

export default Component;
