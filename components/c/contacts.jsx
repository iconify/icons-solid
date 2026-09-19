import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ctj3b1blo.css';
import '../../css/a/a7ms1gb6t.css';
import '../../css/s/s77fccc8h.css';
import '../../css/w/wla87uw1c.css';
import '../../css/x/xad76ubit.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ctj3b1blo"/><path class="a7ms1gb6t"/><g class="s77fccc8h"><circle class="wla87uw1c"/><path class="xad76ubit"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:contacts"} {...others} />);
}

export default Component;
