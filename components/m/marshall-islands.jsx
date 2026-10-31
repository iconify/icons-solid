import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c85pd_b_f.css';
import '../../css/p/p8ch74sqh.css';
import '../../css/n/nlhkcl_uv.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="c85pd_b_f"/><path class="p8ch74sqh"/><path class="nlhkcl_uv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:marshall-islands"} {...others} />);
}

export default Component;
