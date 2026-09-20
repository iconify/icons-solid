import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bi49tuoiu.css';
import '../../css/k/kzun96hrq.css';
import '../../css/i/icg4i3brj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bi49tuoiu"/><circle class="kzun96hrq"/><circle class="icg4i3brj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:android"} {...others} />);
}

export default Component;
