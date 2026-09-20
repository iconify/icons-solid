import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctw_mi0zs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ctw_mi0zs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:instagram-logo-2-block"} {...others} />);
}

export default Component;
