import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jguqovbkx.css';
import '../../css/o/ofo_293yk.css';
import '../../css/e/ebufvjlmv.css';
import '../../css/d/d6ka9y43j.css';
import '../../css/e/eym0x_vcx.css';
import '../../css/v/vnxtwtbcd.css';

const viewBox = {"width":640,"height":480};
const content = `<path class="jguqovbkx"/><path class="ofo_293yk"/><path class="ebufvjlmv"/><circle class="d6ka9y43j"/><circle class="eym0x_vcx"/><path class="vnxtwtbcd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flag:az-4x3"} {...others} />);
}

export default Component;
