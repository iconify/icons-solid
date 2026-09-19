import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xlixbin9j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xlixbin9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:annotation-dots-filled"} {...others} />);
}

export default Component;
