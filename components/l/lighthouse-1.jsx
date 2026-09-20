import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/auk8xrbke.css';
import '../../css/c/crfykgb5l.css';
import '../../css/f/fzeitcbws.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="auk8xrbke"/><path class="crfykgb5l"/><path class="fzeitcbws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:lighthouse-1"} {...others} />);
}

export default Component;
