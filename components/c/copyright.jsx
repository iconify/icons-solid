import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ew2-dhoec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ew2-dhoec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:copyright"} {...others} />);
}

export default Component;
