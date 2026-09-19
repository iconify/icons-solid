import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jueq24bbv.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="jueq24bbv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:file-ttf-small-filled"} {...others} />);
}

export default Component;
