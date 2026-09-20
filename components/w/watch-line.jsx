import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pb5qedilo.css';
import '../../css/q/qq7wwccrl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="pb5qedilo"/><path class="qq7wwccrl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:watch-line"} {...others} />);
}

export default Component;
