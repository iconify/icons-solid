import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rohhhzb0l.css';
import '../../css/a/axkk8gb6r.css';
import '../../css/m/m19n9hzdc.css';
import '../../css/u/u-5181t1q.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGomrTbeDT"><g class="rohhhzb0l"><path class="axkk8gb6r"/><path class="m19n9hzdc"/><circle class="u-5181t1q"/></g></mask></defs><path mask="url(#SVGomrTbeDT)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:stand-up"} {...others} />);
}

export default Component;
