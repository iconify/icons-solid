import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yhztmo4mr.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="yhztmo4mr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:pennsylvania-with-capital-star"} {...others} />);
}

export default Component;
