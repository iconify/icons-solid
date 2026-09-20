import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqa1w4vfe.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="iqa1w4vfe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:mounted-scope"} {...others} />);
}

export default Component;
