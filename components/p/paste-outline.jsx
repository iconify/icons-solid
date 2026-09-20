import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg9ihxbsk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zg9ihxbsk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lsicon:paste-outline"} {...others} />);
}

export default Component;
