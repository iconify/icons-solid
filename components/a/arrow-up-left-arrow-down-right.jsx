import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc02xp00d.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="rc02xp00d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:arrow-up-left-arrow-down-right"} {...others} />);
}

export default Component;
