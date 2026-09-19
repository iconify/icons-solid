import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b97j8tb8h.css';
import '../../css/c/ch0locc9x.css';
import '../../css/m/m6cgo-z4n.css';
import '../../css/b/b3y77acjg.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="b97j8tb8h"/><g class="ch0locc9x"><path class="m6cgo-z4n"/><path class="b3y77acjg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:external"} {...others} />);
}

export default Component;
