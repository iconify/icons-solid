import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jq9c2zbvz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jq9c2zbvz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:battery-vertical-charging"} {...others} />);
}

export default Component;
