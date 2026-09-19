import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hfl1y3bns.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hfl1y3bns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flowbite:gitlab-solid"} {...others} />);
}

export default Component;
