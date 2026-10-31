import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u-ahyi0ue.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="u-ahyi0ue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:eaved-open-gabled-building"} {...others} />);
}

export default Component;
