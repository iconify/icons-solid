import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/k/kgx5ug76u.css';
import '../../css/i/inssfsb3y.css';
import '../../css/n/nzljxzvhg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="kgx5ug76u"/><path class="inssfsb3y"/><path class="nzljxzvhg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:confetti-popper"} {...others} />);
}

export default Component;
