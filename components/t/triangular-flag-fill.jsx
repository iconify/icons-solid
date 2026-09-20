import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3imv28ec.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j3imv28ec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:triangular-flag-fill"} {...others} />);
}

export default Component;
