import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t1iss4-fm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t1iss4-fm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wineglass-triangle-broken"} {...others} />);
}

export default Component;
