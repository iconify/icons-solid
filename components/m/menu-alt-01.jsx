import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/scqqs5yey.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="scqqs5yey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:menu-alt-01"} {...others} />);
}

export default Component;
