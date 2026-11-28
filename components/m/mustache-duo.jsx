import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/prid3u2wn.css';
import '../../css/w/wcr5_ubdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="prid3u2wn secondary"/><path class="primary wcr5_ubdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mustache-duo"} {...others} />);
}

export default Component;
