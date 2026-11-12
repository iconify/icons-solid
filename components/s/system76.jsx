import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c73n_2bpf.css';
import '../../css/e/eht21_1kr.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="c73n_2bpf"/><path class="eht21_1kr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:system76"} {...others} />);
}

export default Component;
