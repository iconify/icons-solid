import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zhkkb41cf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zhkkb41cf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:speaker-1-solid"} {...others} />);
}

export default Component;
