import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/d/dcyd5objb.css';
import '../../css/l/l7q0ip_gf.css';
import '../../css/r/rx9asmbnf.css';
import '../../css/z/z5ec-kbwe.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGLAE3qbIy"><g class="rohhhzb0l"><rect class="dcyd5objb"/><path class="l7q0ip_gf"/><path class="rx9asmbnf"/><path class="z5ec-kbwe"/></g></mask></defs><path mask="url(#SVGLAE3qbIy)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:modify-two"} {...others} />);
}

export default Component;
