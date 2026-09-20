import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwvaa_2fz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lwvaa_2fz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-arrow-up"} {...others} />);
}

export default Component;
