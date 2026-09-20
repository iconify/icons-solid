import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d03a88bzw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="d03a88bzw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:hammer-and-inverted-shoe"} {...others} />);
}

export default Component;
