import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jvsrq9-zz.css';
import '../../css/n/nejim4bkm.css';
import '../../css/b/brqjlwv3a.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="jvsrq9-zz"/><path class="nejim4bkm"/><path class="brqjlwv3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:shorts"} {...others} />);
}

export default Component;
