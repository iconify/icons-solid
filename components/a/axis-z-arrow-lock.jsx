import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qc9ac_byk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qc9ac_byk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:axis-z-arrow-lock"} {...others} />);
}

export default Component;
