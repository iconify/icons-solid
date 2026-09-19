import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2nqf8t8e.css';
import '../../css/v/vqb--ibgd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n2nqf8t8e"/><path class="vqb--ibgd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:logo-closed-captioning"} {...others} />);
}

export default Component;
