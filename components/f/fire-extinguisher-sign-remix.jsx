import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hym1jybwd.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="hym1jybwd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:fire-extinguisher-sign-remix"} {...others} />);
}

export default Component;
