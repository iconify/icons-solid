import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pp1n6kbii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pp1n6kbii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:checkbox-blank-off"} {...others} />);
}

export default Component;
