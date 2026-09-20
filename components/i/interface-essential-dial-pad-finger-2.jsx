import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqf4bq9yv.css';
import '../../css/l/lfav0yevu.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="aqf4bq9yv"/><path class="lfav0yevu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-dial-pad-finger-2"} {...others} />);
}

export default Component;
