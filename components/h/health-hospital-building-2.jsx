import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpf1zacks.css';
import '../../css/n/nqe79lxrn.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kpf1zacks"/><path class="nqe79lxrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:health-hospital-building-2"} {...others} />);
}

export default Component;
