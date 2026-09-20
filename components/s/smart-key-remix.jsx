import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fzjc2bc_y.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fzjc2bc_y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:smart-key-remix"} {...others} />);
}

export default Component;
