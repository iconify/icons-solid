import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylllz3bhi.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ylllz3bhi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:incognito-mode-remix"} {...others} />);
}

export default Component;
