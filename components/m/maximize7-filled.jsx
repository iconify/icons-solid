import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahudrcy8m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahudrcy8m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:maximize7-filled"} {...others} />);
}

export default Component;
