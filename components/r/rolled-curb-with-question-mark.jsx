import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bqu27-g1n.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="bqu27-g1n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:rolled-curb-with-question-mark"} {...others} />);
}

export default Component;
