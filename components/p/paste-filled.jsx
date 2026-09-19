import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fp7ycmoec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fp7ycmoec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:paste-filled"} {...others} />);
}

export default Component;
