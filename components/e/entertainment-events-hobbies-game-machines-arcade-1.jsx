import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bay1occvy.css';
import '../../css/a/a4ky56boe.css';
import '../../css/f/fwc28s3td.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="bay1occvy"/><path class="a4ky56boe"/><path class="fwc28s3td"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:entertainment-events-hobbies-game-machines-arcade-1"} {...others} />);
}

export default Component;
