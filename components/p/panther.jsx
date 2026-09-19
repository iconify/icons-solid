import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wjh0hj0uk.css';

const viewBox = {"width":2016,"height":1984};
const content = `<path class="wjh0hj0uk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vs:panther"} {...others} />);
}

export default Component;
