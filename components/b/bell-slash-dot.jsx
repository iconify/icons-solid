import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/alyf4_bkr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="alyf4_bkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"codicon:bell-slash-dot"} {...others} />);
}

export default Component;
