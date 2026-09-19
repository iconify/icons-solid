import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gjr-4xaxf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gjr-4xaxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:blood-drop"} {...others} />);
}

export default Component;
