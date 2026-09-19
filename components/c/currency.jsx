import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dfb7qebpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dfb7qebpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:currency"} {...others} />);
}

export default Component;
