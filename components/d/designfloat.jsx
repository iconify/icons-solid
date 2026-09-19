import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isyw8ybmv.css';

const viewBox = {"width":464,"height":488};
const content = `<path class="isyw8ybmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:designfloat"} {...others} />);
}

export default Component;
