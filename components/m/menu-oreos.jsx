import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tkl6re2ft.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tkl6re2ft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gg:menu-oreos"} {...others} />);
}

export default Component;
