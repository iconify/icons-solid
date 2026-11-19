import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajvcl8b8o.css';
import '../../css/v/vicg34bwz.css';
import '../../css/w/w1ve46hlw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ajvcl8b8o"/><path clip-rule="evenodd" class="vicg34bwz"/><path class="w1ve46hlw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:shareplay"} {...others} />);
}

export default Component;
