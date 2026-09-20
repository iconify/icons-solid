import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kn0lpk9fb.css';
import '../../css/q/qclqxdbjb.css';
import '../../css/k/kqadjqbqh.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="kn0lpk9fb"/><path class="qclqxdbjb"/><path class="kqadjqbqh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:medical-bag-flat"} {...others} />);
}

export default Component;
