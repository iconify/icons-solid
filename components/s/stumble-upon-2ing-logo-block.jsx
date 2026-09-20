import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r8i36fqgk.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="r8i36fqgk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:stumble-upon-2ing-logo-block"} {...others} />);
}

export default Component;
