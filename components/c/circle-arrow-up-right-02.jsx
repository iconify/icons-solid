import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x80qvwb-u.css';
import '../../css/b/b63gy5bbo.css';
import '../../css/c/c8--srbre.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="x80qvwb-u"/><path class="b63gy5bbo"/><path class="c8--srbre"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:circle-arrow-up-right-02"} {...others} />);
}

export default Component;
