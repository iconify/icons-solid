import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/r/rhi_p7bme.css';
import '../../css/l/lq43vqaom.css';
import '../../css/b/b88eryboh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><circle class="rhi_p7bme"/><path class="lq43vqaom"/><circle class="b88eryboh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:people-multiple"} {...others} />);
}

export default Component;
