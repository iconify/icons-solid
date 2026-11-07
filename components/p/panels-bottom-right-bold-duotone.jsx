import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eiq_gybtr.css';
import '../../css/q/qgwq-wbxv.css';
import '../../css/f/f7ztvmbgu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eiq_gybtr"/><path class="qgwq-wbxv"/><path class="f7ztvmbgu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:panels-bottom-right-bold-duotone"} {...others} />);
}

export default Component;
