import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbivq1bzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hbivq1bzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:music-note-variant-filled"} {...others} />);
}

export default Component;
