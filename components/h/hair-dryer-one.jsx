import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/s/s_fep1eov.css';
import '../../css/f/fdc_qf35n.css';
import '../../css/a/arhzl8byt.css';
import '../../css/m/mvffjit2t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGGpwyLeWP"><g class="rohhhzb0l"><path class="s_fep1eov"/><path class="fdc_qf35n"/><path class="arhzl8byt"/><circle class="mvffjit2t"/></g></mask></defs><path mask="url(#SVGGpwyLeWP)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:hair-dryer-one"} {...others} />);
}

export default Component;
