import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xmi8cmbei.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xmi8cmbei"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:sort-variant-lock"} {...others} />);
}

export default Component;
