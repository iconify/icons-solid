import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b_4zw6myr.css';
import '../../css/d/dqmrp9wad.css';
import '../../css/k/ksly09b8o.css';
import '../../css/b/bl5cpf6bt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b_4zw6myr"/><path class="dqmrp9wad"/><path class="ksly09b8o"/><path class="bl5cpf6bt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-reorder"} {...others} />);
}

export default Component;
