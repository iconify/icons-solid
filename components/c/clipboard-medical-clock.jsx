import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kocx10j0q.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kocx10j0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:clipboard-medical-clock"} {...others} />);
}

export default Component;
