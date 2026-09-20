import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnqqqb4zo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cnqqqb4zo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:skip-up-fill"} {...others} />);
}

export default Component;
