import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr-hoeb6g.css';
import '../../css/u/u8hb6sbwc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b zr-hoeb6g"/><path class="b u8hb6sbwc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bowl-bubbles"} {...others} />);
}

export default Component;
