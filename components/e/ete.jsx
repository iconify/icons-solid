import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nst9stbrp.css';
import '../../css/v/v4u195i1r.css';
import '../../css/j/j646bpqop.css';
import '../../css/l/lz8purbdg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nst9stbrp"/><path class="v4u195i1r"/><path class="j646bpqop"/><path class="lz8purbdg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ete"} {...others} />);
}

export default Component;
