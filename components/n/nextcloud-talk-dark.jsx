import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_j778rnr.css';
import '../../css/h/huj_k0bxh.css';

const viewBox = {"width":512,"height":512};
const content = `<path clip-rule="evenodd" class="n_j778rnr"/><path clip-rule="evenodd" class="huj_k0bxh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nextcloud-talk-dark"} {...others} />);
}

export default Component;
