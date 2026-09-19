import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ag2su0b1d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ag2su0b1d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:caret-up-md"} {...others} />);
}

export default Component;
