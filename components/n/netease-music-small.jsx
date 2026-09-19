import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iu7f6s55p.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="iu7f6s55p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:netease-music-small"} {...others} />);
}

export default Component;
