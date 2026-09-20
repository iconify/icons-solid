import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9gy4gb7p.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="q9gy4gb7p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:rain-cloud"} {...others} />);
}

export default Component;
