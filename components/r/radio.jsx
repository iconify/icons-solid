import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gr7ox659t.css';
import '../../css/k/kqxojurgk.css';
import '../../css/d/d5l_p05mg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gr7ox659t"/><circle class="kqxojurgk"/><path class="d5l_p05mg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:radio"} {...others} />);
}

export default Component;
