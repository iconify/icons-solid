import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u148y6bbs.css';
import '../../css/a/az7uqpbwk.css';
import '../../css/y/y9-n05-_y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="u148y6bbs"><path class="az7uqpbwk"/><path class="y9-n05-_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:location"} {...others} />);
}

export default Component;
