import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v5la5qlws.css';
import '../../css/b/bjg55ib_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="v5la5qlws"/><path vector-effect="non-scaling-stroke" class="bjg55ib_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wordpress:more-vertical"} {...others} />);
}

export default Component;
