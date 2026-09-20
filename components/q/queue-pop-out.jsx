import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/sfeu6cbdw.css';
import '../../css/l/lxnz-6x0c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="sfeu6cbdw"/><path class="lxnz-6x0c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:queue-pop-out"} {...others} />);
}

export default Component;
