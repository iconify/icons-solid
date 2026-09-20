import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a6m9uabxg.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="a6m9uabxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:raised-curb-with-exclamation-point"} {...others} />);
}

export default Component;
