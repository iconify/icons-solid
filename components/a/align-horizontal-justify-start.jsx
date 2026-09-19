import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_0_hhb-z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x_0_hhb-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:align-horizontal-justify-start"} {...others} />);
}

export default Component;
