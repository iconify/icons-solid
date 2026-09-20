import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v64c_yb9i.css';
import '../../css/v/v_vtyxmcb.css';
import '../../css/f/fz2_nmwzp.css';
import '../../css/i/ivqkh1ttq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v64c_yb9i"/><path class="v_vtyxmcb"/><path class="fz2_nmwzp"/><path class="ivqkh1ttq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nftbs"} {...others} />);
}

export default Component;
