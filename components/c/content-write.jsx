import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mpvnfjbpj.css';
import '../../css/a/a5arprq4h.css';
import '../../css/s/s88afubvr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mpvnfjbpj"/><path class="a5arprq4h"/><path class="s88afubvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:content-write"} {...others} />);
}

export default Component;
