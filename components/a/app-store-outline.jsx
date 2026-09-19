import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/braez0b2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="braez0b2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:app-store-outline"} {...others} />);
}

export default Component;
