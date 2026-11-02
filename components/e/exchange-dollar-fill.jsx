import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sif1ckb6e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sif1ckb6e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:exchange-dollar-fill"} {...others} />);
}

export default Component;
