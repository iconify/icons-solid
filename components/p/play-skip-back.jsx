import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mg6d2vd4g.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mg6d2vd4g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:play-skip-back"} {...others} />);
}

export default Component;
