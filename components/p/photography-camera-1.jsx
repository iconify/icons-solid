import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/saaufmbsj.css';
import '../../css/k/kl-9_wbua.css';
import '../../css/p/pgfaj-tpp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="saaufmbsj"/><path class="kl-9_wbua"/><path class="pgfaj-tpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:photography-camera-1"} {...others} />);
}

export default Component;
