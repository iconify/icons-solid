import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccs_qsmmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ccs_qsmmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:fan-fill"} {...others} />);
}

export default Component;
