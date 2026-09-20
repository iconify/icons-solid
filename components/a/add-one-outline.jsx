import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oz4-e3b6u.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="oz4-e3b6u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:add-one-outline"} {...others} />);
}

export default Component;
