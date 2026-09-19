import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y9zj8ibnp.css';
import '../../css/h/h7g5bjbpi.css';
import '../../css/h/h9zo521qz.css';
import '../../css/j/jgur33bzz.css';
import '../../css/b/bahbv3b3s.css';
import '../../css/h/hsptahbsl.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="y9zj8ibnp"/><path class="h7g5bjbpi"/><path class="h9zo521qz"/><path class="jgur33bzz"/><path class="bahbv3b3s"/><path class="hsptahbsl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:beverage-box"} {...others} />);
}

export default Component;
