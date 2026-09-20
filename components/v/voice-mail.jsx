import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s6rt4ncrj.css';
import '../../css/x/x-giv9wiz.css';
import '../../css/b/bonr7vban.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="s6rt4ncrj"/><path class="x-giv9wiz"/><path class="bonr7vban"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:voice-mail"} {...others} />);
}

export default Component;
