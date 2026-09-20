import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lmknqkbgt.css';
import '../../css/l/lvg9u-1my.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="lmknqkbgt"/><path class="lvg9u-1my"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:settings-pin"} {...others} />);
}

export default Component;
