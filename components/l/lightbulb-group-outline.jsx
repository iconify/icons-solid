import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t44l9wbra.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t44l9wbra"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:lightbulb-group-outline"} {...others} />);
}

export default Component;
