import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t27wpd78u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t27wpd78u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:triangle-up-24"} {...others} />);
}

export default Component;
