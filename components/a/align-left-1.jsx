import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/j/jtwic-8mg.css';
import '../../css/u/uhzlg7bgm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="jtwic-8mg"/><path class="uhzlg7bgm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:align-left-1"} {...others} />);
}

export default Component;
