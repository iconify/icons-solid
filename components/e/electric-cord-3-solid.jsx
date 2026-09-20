import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x72ag7b7a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x72ag7b7a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:electric-cord-3-solid"} {...others} />);
}

export default Component;
