import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zl11e_b6a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="zl11e_b6a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:test-tube-rack"} {...others} />);
}

export default Component;
