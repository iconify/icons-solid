import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hst90xz2u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hst90xz2u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:repeat-alt-filled"} {...others} />);
}

export default Component;
