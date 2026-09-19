import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jctdg3jzw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jctdg3jzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:croissants-pupil"} {...others} />);
}

export default Component;
