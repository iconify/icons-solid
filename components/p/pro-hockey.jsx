import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6ysjn_ml.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="v6ysjn_ml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-mdl2:pro-hockey"} {...others} />);
}

export default Component;
