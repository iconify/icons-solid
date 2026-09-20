import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gg0lr7rfc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gg0lr7rfc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:code-sandbox-logo-solid"} {...others} />);
}

export default Component;
