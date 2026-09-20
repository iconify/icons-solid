import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vxu6-3n6u.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="vxu6-3n6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:ribbon-remix"} {...others} />);
}

export default Component;
