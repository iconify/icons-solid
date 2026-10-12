import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dvgxibc5v.css';
import '../../css/v/vpgoyob0i.css';
import '../../css/k/kgq6y_3vf.css';
import '../../css/g/gx5hekbho.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dvgxibc5v"/><path class="vpgoyob0i"/><ellipse transform="rotate(45 11.65 12.44)" class="kgq6y_3vf"/><path class="gx5hekbho"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:toothpaste"} {...others} />);
}

export default Component;
