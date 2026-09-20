import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/funp-8bnr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="funp-8bnr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:sign-and-pedestrian"} {...others} />);
}

export default Component;
