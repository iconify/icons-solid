import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9cl3zbei.css';
import '../../css/a/acxhtihbv.css';
import '../../css/t/t37nn6bko.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGlsC6fdGG"><g class="s9cl3zbei"><path clip-rule="evenodd" class="acxhtihbv"/><path class="t37nn6bko"/></g></mask></defs><path mask="url(#SVGlsC6fdGG)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pills"} {...others} />);
}

export default Component;
