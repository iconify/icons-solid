import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/itdk79b4a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="itdk79b4a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:table-lighting-alt"} {...others} />);
}

export default Component;
