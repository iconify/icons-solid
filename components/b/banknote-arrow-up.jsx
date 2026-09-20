import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wavbaozgl.css';
import '../../css/b/bhvvcjqlf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="wavbaozgl"/><path class="bhvvcjqlf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:banknote-arrow-up"} {...others} />);
}

export default Component;
