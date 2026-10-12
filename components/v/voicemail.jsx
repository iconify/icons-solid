import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vffgq3b1l.css';
import '../../css/m/mk91vlb4x.css';
import '../../css/z/z_weibblf.css';
import '../../css/l/ljqparbel.css';
import '../../css/l/l9u50bcwi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="vffgq3b1l"/><circle class="mk91vlb4x"/><circle class="z_weibblf"/><circle class="ljqparbel"/><path class="l9u50bcwi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:voicemail"} {...others} />);
}

export default Component;
