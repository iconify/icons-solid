import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zxe83b55k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zxe83b55k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:framer-logo-solid"} {...others} />);
}

export default Component;
