import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a9hx4balk.css';
import '../../css/g/gx74lwb0e.css';
import '../../css/b/b3v177x2s.css';
import '../../css/n/n0ij7acao.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a9hx4balk"/><path class="gx74lwb0e"/><path class="b3v177x2s"/><path class="n0ij7acao"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:levels"} {...others} />);
}

export default Component;
