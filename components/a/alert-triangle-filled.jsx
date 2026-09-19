import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wp0adhykb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wp0adhykb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:alert-triangle-filled"} {...others} />);
}

export default Component;
