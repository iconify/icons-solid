import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f-21--bxk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f-21--bxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:integral-distribute-outline"} {...others} />);
}

export default Component;
