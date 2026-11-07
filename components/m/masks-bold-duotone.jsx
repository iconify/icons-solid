import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z8e6oux4o.css';
import '../../css/j/jmtwhyb0w.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/q/q0c5uqbol.css';
import '../../css/t/tw06w4bkl.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z8e6oux4o"/><path class="jmtwhyb0w"/><g class="xtpeb-edw"><path class="q0c5uqbol"/><path class="tw06w4bkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:masks-bold-duotone"} {...others} />);
}

export default Component;
