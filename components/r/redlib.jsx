import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqu2_e4mu.css';
import '../../css/i/i-02_nl2g.css';
import '../../css/e/eyc-0ib3w.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="pqu2_e4mu"/><path class="i-02_nl2g"/><path class="eyc-0ib3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:redlib"} {...others} />);
}

export default Component;
