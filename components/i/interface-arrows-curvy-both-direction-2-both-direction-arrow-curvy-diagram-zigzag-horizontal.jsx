import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eyo64f5ox.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="eyo64f5ox"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-curvy-both-direction-2-both-direction-arrow-curvy-diagram-zigzag-horizontal"} {...others} />);
}

export default Component;
