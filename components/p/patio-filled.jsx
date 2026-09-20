import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pfo1tsbjl.css';
import '../../css/p/pz67xgbrp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pfo1tsbjl"/><path class="pz67xgbrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:patio-filled"} {...others} />);
}

export default Component;
