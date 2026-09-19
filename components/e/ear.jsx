import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9sf3nbrj.css';
import '../../css/s/sp6-phchq.css';
import '../../css/g/g76tbfbxy.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a9sf3nbrj"/><path class="sp6-phchq"/><path class="g76tbfbxy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:ear"} {...others} />);
}

export default Component;
