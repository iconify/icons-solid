import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkonw3bdh.css';
import '../../css/s/skxq2dbrt.css';
import '../../css/g/g6shut3wq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nkonw3bdh"/><path class="skxq2dbrt"/><path class="g6shut3wq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:sanitizer-alt"} {...others} />);
}

export default Component;
