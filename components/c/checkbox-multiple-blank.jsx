import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba8_grb5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ba8_grb5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:checkbox-multiple-blank"} {...others} />);
}

export default Component;
