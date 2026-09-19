import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_o80v9iz.css';

const viewBox = {"width":1792,"height":1536};
const content = `<path class="r_o80v9iz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:external-link"} {...others} />);
}

export default Component;
