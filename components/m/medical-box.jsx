import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/g/g93f848nk.css';
import '../../css/k/k-n-l4bih.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGzGXkVSWQ"><g class="rohhhzb0l"><path class="g93f848nk"/><path class="k-n-l4bih"/></g></mask></defs><path mask="url(#SVGzGXkVSWQ)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:medical-box"} {...others} />);
}

export default Component;
