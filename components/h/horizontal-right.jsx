import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pqc49ei0y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pqc49ei0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:horizontal-right"} {...others} />);
}

export default Component;
