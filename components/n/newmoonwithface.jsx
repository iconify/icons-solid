import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/al0zveb0a.css';
import '../../css/a/ayfs0cb5s.css';
import '../../css/j/jy90cd2id.css';

const viewBox = {"width":512,"height":512};
const content = `<circle class="al0zveb0a"/><path class="ayfs0cb5s"/><path class="jy90cd2id"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:newmoonwithface"} {...others} />);
}

export default Component;
