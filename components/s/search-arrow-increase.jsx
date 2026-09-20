import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/j/jx69f4-uk.css';
import '../../css/v/vo37byb_e.css';
import '../../css/n/nkw6p-bju.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="jx69f4-uk"/><path class="vo37byb_e"/><path class="nkw6p-bju"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:search-arrow-increase"} {...others} />);
}

export default Component;
