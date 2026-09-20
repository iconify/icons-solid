import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q9q0xo4ir.css';
import '../../css/g/gnncr1dzh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q9q0xo4ir"/><path class="gnncr1dzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:eql"} {...others} />);
}

export default Component;
