import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e5s1lcbbn.css';
import '../../css/d/dh2sg1pzk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e5s1lcbbn"/><path class="dh2sg1pzk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:common-file-give-hand-3-bold"} {...others} />);
}

export default Component;
