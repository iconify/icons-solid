import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjpejac3h.css';
import '../../css/s/sx6n9fovk.css';
import '../../css/f/f0knz3bso.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="yjpejac3h"/><path class="sx6n9fovk"/><path class="f0knz3bso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:arrow-up-start-circle"} {...others} />);
}

export default Component;
