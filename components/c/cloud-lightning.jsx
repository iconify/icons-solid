import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j03_tsblz.css';
import '../../css/r/rs0wrok6f.css';
import '../../css/m/m6a92mbat.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j03_tsblz"/><path class="rs0wrok6f"/><path class="m6a92mbat"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cloud-lightning"} {...others} />);
}

export default Component;
