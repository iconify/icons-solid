import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zseorbhuz.css';
import '../../css/m/m7u08gbtz.css';
import '../../css/s/snp287xku.css';
import '../../css/d/d83ymobbo.css';
import '../../css/b/boz2yz4xo.css';
import '../../css/s/s8x4fmbwu.css';
import '../../css/t/tyt90ebvi.css';
import '../../css/h/h7vsvab-w.css';
import '../../css/h/hap247b_z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="zseorbhuz"/><path class="m7u08gbtz"/><path class="snp287xku"/><path class="d83ymobbo"/><path class="boz2yz4xo"/><path class="s8x4fmbwu"/><path class="tyt90ebvi"/><path class="h7vsvab-w"/><path class="hap247b_z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:ok-hand-1"} {...others} />);
}

export default Component;
