import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hr_rigy-p.css';

const viewBox = {"width":25,"height":24};
const content = `<path class="hr_rigy-p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:bulb-4"} {...others} />);
}

export default Component;
