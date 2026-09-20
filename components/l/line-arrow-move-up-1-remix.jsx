import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_n5z_b3v.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w_n5z_b3v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:line-arrow-move-up-1-remix"} {...others} />);
}

export default Component;
