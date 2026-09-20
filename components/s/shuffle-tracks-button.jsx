import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gaepzkbau.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="gaepzkbau"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:shuffle-tracks-button"} {...others} />);
}

export default Component;
