import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x-qftzgsu.css';
import '../../css/b/bbynl-b9a.css';
import '../../css/h/hps6mjb0w.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="x-qftzgsu"/><path clip-rule="evenodd" class="bbynl-b9a"/><path class="hps6mjb0w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:heart-hands-medium-light"} {...others} />);
}

export default Component;
