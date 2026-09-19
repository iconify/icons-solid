import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fbabc2j6s.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fbabc2j6s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:playlist-shuffle-fill"} {...others} />);
}

export default Component;
