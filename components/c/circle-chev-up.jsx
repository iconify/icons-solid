import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqc3elbeh.css';
import '../../css/i/ih5nivq9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qqc3elbeh"/><path class="ih5nivq9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:circle-chev-up"} {...others} />);
}

export default Component;
