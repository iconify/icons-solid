import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tm_qsybka.css';
import '../../css/w/wqbkv8u2i.css';
import '../../css/k/k66cgcc-f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tm_qsybka"/><path class="wqbkv8u2i"/><path class="k66cgcc-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-happy-beaming"} {...others} />);
}

export default Component;
