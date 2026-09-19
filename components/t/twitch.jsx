import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y46s7bv9m.css';
import '../../css/q/qo2zlmuak.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="y46s7bv9m"/><path class="qo2zlmuak"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:twitch"} {...others} />);
}

export default Component;
