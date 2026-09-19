import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrr0wcb7f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nrr0wcb7f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:blood-drop-minus-filled"} {...others} />);
}

export default Component;
