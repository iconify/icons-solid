import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y7a7_mvmy.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="y7a7_mvmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:swamp"} {...others} />);
}

export default Component;
