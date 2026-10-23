import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gpm7scc6w.css';
import '../../css/q/qvrxrvbro.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gpm7scc6w"/><path class="qvrxrvbro"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:smartphone-user-round"} {...others} />);
}

export default Component;
