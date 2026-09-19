import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ga3_rpjey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ga3_rpjey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:ma-lighting-3"} {...others} />);
}

export default Component;
