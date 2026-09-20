import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q-fpd76-w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q-fpd76-w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:database-arrow-right-outline"} {...others} />);
}

export default Component;
