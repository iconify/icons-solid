import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xzz_8cbhn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xzz_8cbhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:google-wallet"} {...others} />);
}

export default Component;
