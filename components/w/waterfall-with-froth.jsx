import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u4pralb3p.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="u4pralb3p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:waterfall-with-froth"} {...others} />);
}

export default Component;
