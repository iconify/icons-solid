import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wrz2ljobp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wrz2ljobp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:annotation-plus-filled"} {...others} />);
}

export default Component;
