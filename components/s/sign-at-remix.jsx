import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykz1nx-0u.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ykz1nx-0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:sign-at-remix"} {...others} />);
}

export default Component;
