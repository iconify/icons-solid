import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zd22x-bgq.css';
import '../../css/p/phq_ikbmf.css';
import '../../css/n/nnodtjbab.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zd22x-bgq"/><path class="phq_ikbmf"/><path class="nnodtjbab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:tooth"} {...others} />);
}

export default Component;
