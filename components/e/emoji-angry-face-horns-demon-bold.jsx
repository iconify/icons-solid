import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5b7hjb5g.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o5b7hjb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:emoji-angry-face-horns-demon-bold"} {...others} />);
}

export default Component;
