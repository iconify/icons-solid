import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q82hpthgx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="q82hpthgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:tick-box-multiple-outline"} {...others} />);
}

export default Component;
