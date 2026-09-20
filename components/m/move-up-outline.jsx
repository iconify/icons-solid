import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yw2pvlb4p.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yw2pvlb4p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:move-up-outline"} {...others} />);
}

export default Component;
