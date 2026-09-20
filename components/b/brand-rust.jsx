import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/swvjn-w8t.css';
import '../../css/x/xzkkjsbsy.css';
import '../../css/h/hzs02tx3p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="swvjn-w8t"/><path class="xzkkjsbsy"/><path class="hzs02tx3p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-rust"} {...others} />);
}

export default Component;
