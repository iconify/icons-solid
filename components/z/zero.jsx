import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvu1scc_a.css';
import '../../css/k/kh1pia80p.css';
import '../../css/a/aun6_3zku.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="wvu1scc_a"/><path clip-rule="evenodd" class="kh1pia80p"/><path class="aun6_3zku"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:zero"} {...others} />);
}

export default Component;
