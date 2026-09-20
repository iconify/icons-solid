import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/bm87u4fvu.css';
import '../../css/v/v-rljbbxp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="bm87u4fvu"/><path class="v-rljbbxp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:double-check-two-tone"} {...others} />);
}

export default Component;
