import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qepuaqbvx.css';
import '../../css/n/np5p5lbru.css';
import '../../css/r/r2p4djrni.css';
import '../../css/g/gmfi77gxg.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="qepuaqbvx"><circle class="np5p5lbru"/><path class="r2p4djrni"/></g><circle class="gmfi77gxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:info-stroke-16"} {...others} />);
}

export default Component;
