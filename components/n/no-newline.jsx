import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w2z21lbyl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w2z21lbyl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:no-newline"} {...others} />);
}

export default Component;
