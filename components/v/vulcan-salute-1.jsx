import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/du-7vpbkh.css';
import '../../css/k/kk_56jxww.css';
import '../../css/e/e12tw0b8p.css';
import '../../css/q/qrrh5951r.css';
import '../../css/u/uymgdabjo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="du-7vpbkh"/><path class="kk_56jxww"/><path class="e12tw0b8p"/><path class="qrrh5951r"/><path class="uymgdabjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:vulcan-salute-1"} {...others} />);
}

export default Component;
