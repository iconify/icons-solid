import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqpralk8i.css';
import '../../css/r/rfhud25gy.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="bqpralk8i"/><path class="rfhud25gy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:tower-section-20"} {...others} />);
}

export default Component;
