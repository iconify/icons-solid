import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/asx1s34lr.css';
import '../../css/l/l7gyyf0so.css';
import '../../css/x/xuvtw8qyt.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="asx1s34lr"/><path class="l7gyyf0so"/><path class="xuvtw8qyt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pelton-wheel-20"} {...others} />);
}

export default Component;
