import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tgyn-qbco.css';
import '../../css/i/i700k7_wg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tgyn-qbco"/><path clip-rule="evenodd" class="i700k7_wg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:nabox"} {...others} />);
}

export default Component;
