import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n11x2ztin.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n11x2ztin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:external-link"} {...others} />);
}

export default Component;
