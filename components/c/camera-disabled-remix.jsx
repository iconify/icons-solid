import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tc-4ceb2i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tc-4ceb2i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:camera-disabled-remix"} {...others} />);
}

export default Component;
