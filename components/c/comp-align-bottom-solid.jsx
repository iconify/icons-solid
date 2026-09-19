import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/s/sqqlng0bi.css';
import '../../css/b/b99wzdbrx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="sqqlng0bi"/><path class="b99wzdbrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:comp-align-bottom-solid"} {...others} />);
}

export default Component;
