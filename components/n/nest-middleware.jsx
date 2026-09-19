import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qymgqsb3i.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qymgqsb3i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"catppuccin:nest-middleware"} {...others} />);
}

export default Component;
