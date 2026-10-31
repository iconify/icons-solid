import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pswta5bde.css';
import '../../css/o/olxsmqbop.css';
import '../../css/m/mqeul_bkb.css';
import '../../css/q/q4i_g-83q.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="pswta5bde"/><path class="olxsmqbop"/><path class="mqeul_bkb"/><path class="q4i_g-83q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:cocos-keeling-islands"} {...others} />);
}

export default Component;
