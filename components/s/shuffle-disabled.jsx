import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i60qu5ylv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i60qu5ylv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:shuffle-disabled"} {...others} />);
}

export default Component;
