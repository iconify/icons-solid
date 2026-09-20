import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2fnftbaj.css';
import '../../css/u/u92ri5qvj.css';
import '../../css/p/pa7le0b0l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a2fnftbaj"/><path clip-rule="evenodd" class="u92ri5qvj"/><path class="pa7le0b0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:sunrise"} {...others} />);
}

export default Component;
