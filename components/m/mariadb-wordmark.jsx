import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-yb0tb4b.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="k-yb0tb4b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:mariadb-wordmark"} {...others} />);
}

export default Component;
