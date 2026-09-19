import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/csit38b6l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="csit38b6l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:light-thorny-triskelion"} {...others} />);
}

export default Component;
