import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/z/zx8rg0y0v.css';
import '../../css/t/t5ak6puto.css';
import '../../css/k/kw15io2hn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="zx8rg0y0v"/><path class="t5ak6puto"/><path class="kw15io2hn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:degree-hat"} {...others} />);
}

export default Component;
