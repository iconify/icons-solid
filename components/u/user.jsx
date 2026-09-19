import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h_kcuvj8y.css';
import '../../css/t/tcwe4ewrv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h_kcuvj8y"/><circle class="tcwe4ewrv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user"} {...others} />);
}

export default Component;
