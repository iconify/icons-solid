import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uqgwv0bzt.css';
import '../../css/y/yi6ar83pn.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="uqgwv0bzt"/><path class="yi6ar83pn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:suitcase"} {...others} />);
}

export default Component;
