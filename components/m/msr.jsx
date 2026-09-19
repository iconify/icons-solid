import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r2j5sfbdy.css';
import '../../css/m/md286fbip.css';
import '../../css/a/ajp9kqb-b.css';
import '../../css/c/c4p7gdcer.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="r2j5sfbdy"/><g class="md286fbip"><path class="ajp9kqb-b"/><path class="c4p7gdcer"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:msr"} {...others} />);
}

export default Component;
