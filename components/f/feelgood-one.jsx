import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/k/klj7_u49t.css';
import '../../css/t/twobkzb1l.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVGKFPPPdik"><g class="wwvp95byt"><path class="klj7_u49t"/><path class="twobkzb1l"/></g></mask></defs><path mask="url(#SVGKFPPPdik)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:feelgood-one"} {...others} />);
}

export default Component;
