import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yfwzkkbni.css';
import '../../css/e/e7rt-sbkm.css';
import '../../css/u/ubnnzvb0h.css';
import '../../css/m/mlnhivbvb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yfwzkkbni"/><path class="e7rt-sbkm"/><path class="ubnnzvb0h"/><path class="mlnhivbvb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:homescreen-hero-light"} {...others} />);
}

export default Component;
