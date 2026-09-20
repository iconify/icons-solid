import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fjf8htb8n.css';
import '../../css/c/cg7sbj33e.css';
import '../../css/i/ix5ht9bxi.css';
import '../../css/z/zh2h96b0l.css';
import '../../css/i/ilz9b8c5r.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="fjf8htb8n"/><path class="cg7sbj33e"/><path class="ix5ht9bxi"/><path class="zh2h96b0l"/><path class="ilz9b8c5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:melting-face"} {...others} />);
}

export default Component;
