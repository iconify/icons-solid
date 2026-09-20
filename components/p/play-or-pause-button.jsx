import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea3mmeb7a.css';
import '../../css/e/ekc3embid.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ea3mmeb7a"/><path class="ekc3embid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:play-or-pause-button"} {...others} />);
}

export default Component;
