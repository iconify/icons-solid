import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/y/yy_lm7s2u.css';
import '../../css/b/bz-kqsi4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="yy_lm7s2u"/><path class="bz-kqsi4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:layout-bottombar-expand"} {...others} />);
}

export default Component;
