import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ez5rt2sqq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ez5rt2sqq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:highlighter"} {...others} />);
}

export default Component;
