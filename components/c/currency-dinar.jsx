import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/c/cw019quyh.css';
import '../../css/q/q7jmlbb5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="cw019quyh"/><path class="q7jmlbb5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:currency-dinar"} {...others} />);
}

export default Component;
