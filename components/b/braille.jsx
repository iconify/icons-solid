import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwequ4uzr.css';
import '../../css/x/x35y5-bvn.css';
import '../../css/g/ghetybbiy.css';
import '../../css/w/w0tnyruqx.css';
import '../../css/m/mmolmgbjo.css';
import '../../css/b/bvyi_ywep.css';
import '../../css/r/revar8k7k.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="wwequ4uzr"/><circle class="x35y5-bvn"/><circle class="ghetybbiy"/><circle class="w0tnyruqx"/><circle class="mmolmgbjo"/><circle class="bvyi_ywep"/><circle class="revar8k7k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"map:braille"} {...others} />);
}

export default Component;
