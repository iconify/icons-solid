import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yt4-etjxu.css';

const viewBox = {"width":304,"height":448};
const content = `<path class="yt4-etjxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:radio-empty"} {...others} />);
}

export default Component;
