import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/izuh8ib-j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="izuh8ib-j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:bulb-group-bollard-3-off"} {...others} />);
}

export default Component;
