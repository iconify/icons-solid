import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b40ptn0xq.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="b40ptn0xq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"maki:mountain-15"} {...others} />);
}

export default Component;
