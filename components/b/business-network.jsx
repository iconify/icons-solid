import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w34osu__y.css';
import '../../css/s/stvuuabpo.css';
import '../../css/z/zqfj3bc2z.css';
import '../../css/r/r3ojb6o-s.css';
import '../../css/g/gaybwbn3s.css';
import '../../css/v/vy59s-8-u.css';
import '../../css/w/w04mpsbin.css';
import '../../css/e/ertkted3e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="w34osu__y"><path class="stvuuabpo"/><path class="zqfj3bc2z"/><path class="r3ojb6o-s"/><path class="gaybwbn3s"/><path class="vy59s-8-u"/><path class="w04mpsbin"/><path class="ertkted3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:business-network"} {...others} />);
}

export default Component;
