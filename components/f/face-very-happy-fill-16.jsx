import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bxvd1fose.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="bxvd1fose"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:face-very-happy-fill-16"} {...others} />);
}

export default Component;
