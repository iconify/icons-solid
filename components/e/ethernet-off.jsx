import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hv130ab-t.css';
import '../../css/c/cu5xsb1ef.css';
import '../../css/p/pt26ck9bi.css';
import '../../css/c/cmx854b6j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGwRs5FcDi"><g class="hv130ab-t"><rect class="cu5xsb1ef"/><path class="pt26ck9bi"/><path class="cmx854b6j"/></g></mask></defs><path mask="url(#SVGwRs5FcDi)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:ethernet-off"} {...others} />);
}

export default Component;
