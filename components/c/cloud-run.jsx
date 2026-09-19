import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uhufdz96y.css';
import '../../css/c/c4q472btv.css';
import '../../css/n/nvqtu2bxi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="uhufdz96y"/><path class="c4q472btv"/><path class="nvqtu2bxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:cloud-run"} {...others} />);
}

export default Component;
