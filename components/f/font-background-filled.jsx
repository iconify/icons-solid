import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nwwfp2bnd.css';

const viewBox = {"width":24,"height":25};
const content = `<path class="nwwfp2bnd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:font-background-filled"} {...others} />);
}

export default Component;
