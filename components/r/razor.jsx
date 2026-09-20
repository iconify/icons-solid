import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jw3yxooyf.css';
import '../../css/a/akg-n4m8r.css';
import '../../css/d/dqhpggbvp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jw3yxooyf"/><path class="akg-n4m8r"/><path class="dqhpggbvp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-lab:razor"} {...others} />);
}

export default Component;
