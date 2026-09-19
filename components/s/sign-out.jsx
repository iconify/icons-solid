import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea3l3ebac.css';

const viewBox = {"width":1568,"height":1280};
const content = `<path class="ea3l3ebac"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:sign-out"} {...others} />);
}

export default Component;
