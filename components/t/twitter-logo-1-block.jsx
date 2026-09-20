import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnm9e3w-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cnm9e3w-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:twitter-logo-1-block"} {...others} />);
}

export default Component;
