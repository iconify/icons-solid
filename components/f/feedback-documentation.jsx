import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvx48eb9e.css';
import '../../css/u/ubqbmcbip.css';
import '../../css/t/tt_v-sdqp.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="cvx48eb9e"/><path class="ubqbmcbip"/><path class="tt_v-sdqp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:feedback-documentation"} {...others} />);
}

export default Component;
