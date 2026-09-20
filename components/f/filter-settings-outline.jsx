import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulgl77hkn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ulgl77hkn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:filter-settings-outline"} {...others} />);
}

export default Component;
