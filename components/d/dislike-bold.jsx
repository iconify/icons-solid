import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ljfitzhle.css';
import '../../css/r/r90ig9mfv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ljfitzhle"/><path class="r90ig9mfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:dislike-bold"} {...others} />);
}

export default Component;
