import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gponh5b7h.css';
import '../../css/z/zxg1t5bmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gponh5b7h"/><path class="zxg1t5bmt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:hand-heart-fill"} {...others} />);
}

export default Component;
