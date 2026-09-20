import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhdu9cbye.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="yhdu9cbye"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:baby-carriage"} {...others} />);
}

export default Component;
