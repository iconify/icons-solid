import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/t/tw5fpob4v.css';
import '../../css/j/jc-0mqb1w.css';
import '../../css/x/xgbznfbhv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="tw5fpob4v"/><path class="jc-0mqb1w"/><path class="xgbznfbhv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:binoculars"} {...others} />);
}

export default Component;
