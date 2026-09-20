import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g0m8o8bnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g0m8o8bnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:chart-bar"} {...others} />);
}

export default Component;
