import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2ex7k_ym.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="t2ex7k_ym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:playstation-logo-solid"} {...others} />);
}

export default Component;
