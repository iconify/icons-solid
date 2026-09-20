import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2v60eklz.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="s2v60eklz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:interface-arrows-button-zigzag-both-direction-arrow-curvy-diagram-zigzag-vertical"} {...others} />);
}

export default Component;
