import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7eegcc8q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q7eegcc8q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:egg-boiled"} {...others} />);
}

export default Component;
