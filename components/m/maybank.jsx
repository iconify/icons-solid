import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bj_2p5drs.css';

const viewBox = {"width":1568,"height":1568};
const content = `<path class="bj_2p5drs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:maybank"} {...others} />);
}

export default Component;
