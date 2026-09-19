import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ao_coaa1a.css';
import '../../css/o/o6g1-kwkw.css';
import '../../css/s/so1r549_h.css';
import '../../css/t/t4d2qxx5t.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ao_coaa1a"/><path class="o6g1-kwkw"/><path class="so1r549_h"/><path class="t4d2qxx5t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:notebookdecorativecover"} {...others} />);
}

export default Component;
