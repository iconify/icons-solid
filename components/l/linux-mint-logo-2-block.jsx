import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vrd_d7bnc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vrd_d7bnc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:linux-mint-logo-2-block"} {...others} />);
}

export default Component;
