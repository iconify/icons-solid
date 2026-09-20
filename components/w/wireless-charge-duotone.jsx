import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bkt59acob.css';
import '../../css/g/gdswwybji.css';
import '../../css/c/cypg0eb-o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="bkt59acob"/><path class="gdswwybji"/><path class="cypg0eb-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:wireless-charge-duotone"} {...others} />);
}

export default Component;
