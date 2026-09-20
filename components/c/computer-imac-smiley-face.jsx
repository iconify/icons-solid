import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3xtuk_0z.css';
import '../../css/w/w5ebk3e4s.css';
import '../../css/k/kp36ymdvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="l3xtuk_0z"><path class="w5ebk3e4s"/><path class="kp36ymdvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:computer-imac-smiley-face"} {...others} />);
}

export default Component;
