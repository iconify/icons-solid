import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xgkuemc4l.css';
import '../../css/f/fkk_uibve.css';
import '../../css/r/r1e1pvq4e.css';
import '../../css/s/s6yemywwb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="xgkuemc4l"/><path class="fkk_uibve"/><path clip-rule="evenodd" class="r1e1pvq4e"/><path class="s6yemywwb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:padding-vertical"} {...others} />);
}

export default Component;
