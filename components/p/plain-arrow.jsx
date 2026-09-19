import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgz_b5v2c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qgz_b5v2c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:plain-arrow"} {...others} />);
}

export default Component;
