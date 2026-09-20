import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lho92t1bf.css';
import '../../css/b/b0ecixu6h.css';
import '../../css/r/rgr7m0cyo.css';
import '../../css/s/slfwgqo0d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lho92t1bf"/><path class="b0ecixu6h"/><path class="rgr7m0cyo"/><path class="slfwgqo0d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:user-nurse"} {...others} />);
}

export default Component;
