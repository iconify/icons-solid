import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v-m-gwgls.css';
import '../../css/l/lhgy1mdzl.css';
import '../../css/m/m279nqaxo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="v-m-gwgls"/><path class="lhgy1mdzl"/><path class="m279nqaxo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:message-sparkle"} {...others} />);
}

export default Component;
