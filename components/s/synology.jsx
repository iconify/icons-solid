import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak0bvlpdn.css';
import '../../css/k/k8lgery7w.css';
import '../../css/z/zixffebzr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ak0bvlpdn"/><path class="k8lgery7w"/><path class="zixffebzr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:synology"} {...others} />);
}

export default Component;
