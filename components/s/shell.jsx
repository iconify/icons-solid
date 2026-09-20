import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/um4-w3bkw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="um4-w3bkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:shell"} {...others} />);
}

export default Component;
