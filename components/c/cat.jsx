import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q2e-fn9vd.css';
import '../../css/b/bbhg4hbom.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="q2e-fn9vd"/><path class="bbhg4hbom"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:cat"} {...others} />);
}

export default Component;
