import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c7u8429br.css';
import '../../css/q/qwf60s-8o.css';
import '../../css/p/phlrdv_7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c7u8429br"/><path clip-rule="evenodd" class="qwf60s-8o"/><path class="phlrdv_7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:stripe"} {...others} />);
}

export default Component;
