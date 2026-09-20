import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/b/bqhkz0qmt.css';
import '../../css/r/rdnzf0b1n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="bqhkz0qmt"/><path class="rdnzf0b1n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:co-working-space-laptop"} {...others} />);
}

export default Component;
