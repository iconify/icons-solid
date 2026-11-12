import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bykqkzu6u.css';
import '../../css/y/ywetm1j1s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bykqkzu6u"/><path clip-rule="evenodd" class="ywetm1j1s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:cbbtc"} {...others} />);
}

export default Component;
