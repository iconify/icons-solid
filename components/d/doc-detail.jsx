import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/aynunbbbe.css';
import '../../css/t/tep8knb1n.css';
import '../../css/h/hwnlojzbg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGrz5kqu2M"><g class="aql7dnt-u"><path class="aynunbbbe"/><path class="tep8knb1n"/><path class="hwnlojzbg"/></g></mask></defs><path mask="url(#SVGrz5kqu2M)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:doc-detail"} {...others} />);
}

export default Component;
