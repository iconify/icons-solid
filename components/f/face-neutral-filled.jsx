import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g9h80gb4f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g9h80gb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:face-neutral-filled"} {...others} />);
}

export default Component;
