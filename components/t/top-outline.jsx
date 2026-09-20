import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rv9k1mbtp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rv9k1mbtp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:top-outline"} {...others} />);
}

export default Component;
