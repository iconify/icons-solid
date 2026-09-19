import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v3_i3wktz.css';
import '../../css/m/mle__jblb.css';
import '../../css/j/jdj5abcnw.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGEMUkMeXq"><g class="v3_i3wktz"><path class="mle__jblb"/><path class="jdj5abcnw"/></g></mask></defs><path mask="url(#SVGEMUkMeXq)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:tower-of-babel"} {...others} />);
}

export default Component;
