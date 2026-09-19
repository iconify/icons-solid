import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c8h8-kk1w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="c8h8-kk1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:sign-in"} {...others} />);
}

export default Component;
