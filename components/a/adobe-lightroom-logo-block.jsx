import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcnyw0x5n.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kcnyw0x5n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-lightroom-logo-block"} {...others} />);
}

export default Component;
