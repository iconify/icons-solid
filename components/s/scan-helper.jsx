import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm3tpvt0r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rm3tpvt0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:scan-helper"} {...others} />);
}

export default Component;
