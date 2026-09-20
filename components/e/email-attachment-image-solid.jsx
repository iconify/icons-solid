import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8ll5jb6j.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="o8ll5jb6j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:email-attachment-image-solid"} {...others} />);
}

export default Component;
