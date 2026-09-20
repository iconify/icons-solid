import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/s/svrgwt6gp.css';
import '../../css/b/bnyw75g8e.css';
import '../../css/h/hey8bu02y.css';
import '../../css/b/b2xz67o6u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="y9tr6bcfx"><path class="svrgwt6gp"/><path class="bnyw75g8e"/><path class="hey8bu02y"/><path class="b2xz67o6u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-cyber:cheese"} {...others} />);
}

export default Component;
