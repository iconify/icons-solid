import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xpl9ltrpi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xpl9ltrpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:chair-rolling"} {...others} />);
}

export default Component;
