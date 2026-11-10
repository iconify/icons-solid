import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zfie0_b0g.css';
import '../../css/b/blmc29b5u.css';
import '../../css/k/kpdxg0huz.css';
import '../../css/v/v5vsy-bcz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zfie0_b0g"/><path class="blmc29b5u"/><path class="kpdxg0huz"/><path class="v5vsy-bcz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:diploma"} {...others} />);
}

export default Component;
