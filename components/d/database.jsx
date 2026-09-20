import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b7uiutj7l.css';
import '../../css/g/ge1gmcosn.css';
import '../../css/s/sahyc_b7a.css';
import '../../css/h/hhq7drbfr.css';
import '../../css/a/auhmw8b2i.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="b7uiutj7l"/><path class="ge1gmcosn"/><path class="sahyc_b7a"/><path class="hhq7drbfr"/><path class="auhmw8b2i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:database"} {...others} />);
}

export default Component;
