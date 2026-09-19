import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2q3-9bye.css';
import '../../css/z/zbzhdcacm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="e2q3-9bye"/><path class="zbzhdcacm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:import"} {...others} />);
}

export default Component;
