import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zyadontyn.css';
import '../../css/z/z8rxepbkv.css';
import '../../css/k/kgn0a9bzn.css';
import '../../css/p/ppvvrsbcd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zyadontyn"/><rect class="z8rxepbkv"/><ellipse class="kgn0a9bzn"/><path class="ppvvrsbcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"famicons:images-outline"} {...others} />);
}

export default Component;
