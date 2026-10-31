import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/az4h9ufdp.css';
import '../../css/k/kt9oi51km.css';
import '../../css/d/dm2_togac.css';
import '../../css/z/z472j7n0q.css';
import '../../css/a/ac6rwvb5p.css';
import '../../css/n/nu9ii6b6j.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="az4h9ufdp"/><path class="kt9oi51km"/><path class="dm2_togac"/><path class="z472j7n0q"/><path class="ac6rwvb5p"/><path class="nu9ii6b6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:mozambique"} {...others} />);
}

export default Component;
