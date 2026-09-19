import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tp_zsmb1r.css';
import '../../css/h/hoky06fxe.css';
import '../../css/g/gxeqjdbdi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tp_zsmb1r"/><circle class="hoky06fxe"/><path class="gxeqjdbdi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:admin-outlined"} {...others} />);
}

export default Component;
