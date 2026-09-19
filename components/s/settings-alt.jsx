import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k0ge21b7q.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k0ge21b7q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:settings-alt"} {...others} />);
}

export default Component;
