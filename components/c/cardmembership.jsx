import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/byhi3osvb.css';
import '../../css/r/r04w-6b-i.css';
import '../../css/j/jx2ov01ct.css';
import '../../css/n/nnrx7v7kb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="byhi3osvb"/><path class="r04w-6b-i"/><path class="jx2ov01ct"/><path class="nnrx7v7kb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:cardmembership"} {...others} />);
}

export default Component;
