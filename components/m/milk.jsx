import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/h/hpahlmbjd.css';
import '../../css/t/tia20ubhp.css';
import '../../css/h/h900g0bgj.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="hpahlmbjd"/><path class="tia20ubhp"/><path class="h900g0bgj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:milk"} {...others} />);
}

export default Component;
