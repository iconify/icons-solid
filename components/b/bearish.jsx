import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cb3dnfb0c.css';
import '../../css/g/gsllvxbkr.css';
import '../../css/k/k09zifbmd.css';
import '../../css/x/x7axkclvw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="cb3dnfb0c"/><g class="gsllvxbkr"><path class="k09zifbmd"/><path class="x7axkclvw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:bearish"} {...others} />);
}

export default Component;
