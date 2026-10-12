import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qxxtdubsv.css';
import '../../css/v/vj1x4ccli.css';
import '../../css/h/hma64bq8s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qxxtdubsv"/><path class="vj1x4ccli"/><path class="hma64bq8s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:contactless-pay"} {...others} />);
}

export default Component;
