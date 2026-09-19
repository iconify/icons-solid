import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/a/a8yau0s8m.css';
import '../../css/x/x9k21mbpj.css';
import '../../css/o/oz4cddb6j.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGXKJ31gMh"><g class="aql7dnt-u"><path class="a8yau0s8m"/><path class="x9k21mbpj"/><rect class="oz4cddb6j"/></g></mask></defs><path mask="url(#SVGXKJ31gMh)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:intersection"} {...others} />);
}

export default Component;
