import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-kbc2bzf.css';
import '../../css/l/l4ki6lbzu.css';
import '../../css/n/nkz6axb6t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="i-kbc2bzf"/><path class="l4ki6lbzu"/><path class="nkz6axb6t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:user-add-alt-fill"} {...others} />);
}

export default Component;
