import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9w1zeriq.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s9w1zeriq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:stop-circle"} {...others} />);
}

export default Component;
