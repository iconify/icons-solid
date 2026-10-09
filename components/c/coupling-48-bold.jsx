import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isqhvabpe.css';
import '../../css/a/a13mabcgi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="isqhvabpe"/><path class="a13mabcgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:coupling-48-bold"} {...others} />);
}

export default Component;
