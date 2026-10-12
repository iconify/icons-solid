import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grb5_qoaa.css';
import '../../css/p/pwjqkc8pr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="grb5_qoaa"/><path class="pwjqkc8pr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:line-graph-square-fill-20"} {...others} />);
}

export default Component;
