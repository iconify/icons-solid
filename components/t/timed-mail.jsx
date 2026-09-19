import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/v/vae5tl_vn.css';
import '../../css/s/sz9qk5b4w.css';
import '../../css/u/u0z5bpiqr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGMepUW2CJ"><g class="rohhhzb0l"><path class="vae5tl_vn"/><circle class="sz9qk5b4w"/><path class="u0z5bpiqr"/></g></mask></defs><path mask="url(#SVGMepUW2CJ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:timed-mail"} {...others} />);
}

export default Component;
