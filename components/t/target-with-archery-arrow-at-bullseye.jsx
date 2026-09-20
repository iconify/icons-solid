import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jm2rlcwdw.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="jm2rlcwdw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:target-with-archery-arrow-at-bullseye"} {...others} />);
}

export default Component;
