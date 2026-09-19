import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oovqvoxkv.css';
import '../../css/k/k_u3wubkw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oovqvoxkv"/><path class="k_u3wubkw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:compass-fill"} {...others} />);
}

export default Component;
