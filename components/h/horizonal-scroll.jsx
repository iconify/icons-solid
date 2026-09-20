import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/ez9ywmyza.css';
import '../../css/e/eusompbzy.css';
import '../../css/u/ua59h4cmx.css';
import '../../css/a/axjozeskk.css';
import '../../css/e/ergwdkhaa.css';
import '../../css/d/d1uawlbrx.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path clip-rule="evenodd" class="ez9ywmyza"/><path class="eusompbzy"/><path clip-rule="evenodd" class="ua59h4cmx"/><path clip-rule="evenodd" class="axjozeskk"/><path class="ergwdkhaa"/><path clip-rule="evenodd" class="d1uawlbrx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:horizonal-scroll"} {...others} />);
}

export default Component;
