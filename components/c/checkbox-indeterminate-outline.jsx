import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m2s7v_ssu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m2s7v_ssu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:checkbox-indeterminate-outline"} {...others} />);
}

export default Component;
