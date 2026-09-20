import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/e608p4byj.css';
import '../../css/h/hg9qm8bal.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="e608p4byj"/><path class="hg9qm8bal"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:skype"} {...others} />);
}

export default Component;
