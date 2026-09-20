import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsiv3aben.css';
import '../../css/q/qta_1ibzz.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="tsiv3aben"/><path class="qta_1ibzz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:black-small-square"} {...others} />);
}

export default Component;
