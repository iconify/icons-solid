import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd9-2o1_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fd9-2o1_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:tooth-braces-filled"} {...others} />);
}

export default Component;
