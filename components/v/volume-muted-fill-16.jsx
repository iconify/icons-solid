import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u70yb2bre.css';
import '../../css/i/i95u-8bjy.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="u70yb2bre"/><path class="i95u-8bjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:volume-muted-fill-16"} {...others} />);
}

export default Component;
