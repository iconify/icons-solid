import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0z666bnz.css';
import '../../css/l/l2skeeb_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m0z666bnz"/><path class="l2skeeb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:duplicate"} {...others} />);
}

export default Component;
