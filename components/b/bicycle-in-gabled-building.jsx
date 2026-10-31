import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo0m-bcql.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eo0m-bcql"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:bicycle-in-gabled-building"} {...others} />);
}

export default Component;
