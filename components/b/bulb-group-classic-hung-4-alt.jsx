import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njyl-vsgz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="njyl-vsgz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:bulb-group-classic-hung-4-alt"} {...others} />);
}

export default Component;
