import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zr6shkb4z.css';
import '../../css/p/p11_xsbtc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zr6shkb4z"/><path class="p11_xsbtc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:ghost"} {...others} />);
}

export default Component;
