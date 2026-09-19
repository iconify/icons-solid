import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5hnrcbox.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x5hnrcbox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:kissing-face-with-smiling-eyes-fill"} {...others} />);
}

export default Component;
