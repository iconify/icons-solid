import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mu410db3i.css';
import '../../css/v/voo8clboo.css';
import '../../css/l/lmf0ecbhq.css';

const viewBox = {"width":36,"height":36};
const content = `<path class="mu410db3i"/><path class="voo8clboo"/><circle class="lmf0ecbhq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:control-lun-solid-badged"} {...others} />);
}

export default Component;
