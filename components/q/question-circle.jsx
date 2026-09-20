import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/owp3_7g1r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="owp3_7g1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:question-circle"} {...others} />);
}

export default Component;
