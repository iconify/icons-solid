import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/w/wyld6brsj.css';
import '../../css/r/rbfoppnsx.css';
import '../../css/r/rbicfqbsj.css';
import '../../css/n/nt7yqcclg.css';
import '../../css/u/uvsn5hb8t.css';
import '../../css/k/ko51kt9-x.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="wyld6brsj"/><path class="rbfoppnsx"/><path class="rbicfqbsj"/><path class="nt7yqcclg"/><path class="uvsn5hb8t"/><path class="ko51kt9-x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:help-chat-1"} {...others} />);
}

export default Component;
