import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/c/ce8f6vpfr.css';
import '../../css/n/nzqwv94kx.css';
import '../../css/s/sdbl3ttsf.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGjDu76bFJ"><g class="hv130ab-t"><path class="ce8f6vpfr"/><path class="nzqwv94kx"/><path class="sdbl3ttsf"/></g></mask></defs><path mask="url(#SVGjDu76bFJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:security-stall"} {...others} />);
}

export default Component;
