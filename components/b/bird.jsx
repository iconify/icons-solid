import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q_edvobtp.css';
import '../../css/r/r4lpi6bpe.css';
import '../../css/s/sl-2nx90w.css';
import '../../css/s/s-mu1_hdh.css';
import '../../css/o/o9qv2p9ve.css';
import '../../css/t/tnv4y9bdv.css';
import '../../css/k/kyp39dfkg.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="q_edvobtp"/><path class="r4lpi6bpe"/><path class="sl-2nx90w"/><path class="s-mu1_hdh"/><path class="o9qv2p9ve"/><path class="tnv4y9bdv"/><path class="kyp39dfkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:bird"} {...others} />);
}

export default Component;
