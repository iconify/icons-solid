import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lxqh5fbli.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="lxqh5fbli"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:speech-balloon-heart-small-filled"} {...others} />);
}

export default Component;
