import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mmz72pbsz.css';
import '../../css/n/nb23r6rtq.css';
import '../../css/m/mgzqwqbpj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="mmz72pbsz"/><path clip-rule="evenodd" class="nb23r6rtq"/><path class="mgzqwqbpj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:smart-watch-circle"} {...others} />);
}

export default Component;
