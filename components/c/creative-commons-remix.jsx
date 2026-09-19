import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c_2evxb0q.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="c_2evxb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:creative-commons-remix"} {...others} />);
}

export default Component;
