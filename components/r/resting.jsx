import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aql7dnt-u.css';
import '../../css/h/h6z-69bjv.css';
import '../../css/o/ond75zu1p.css';
import '../../css/h/hmg-5dugg.css';
import '../../css/q/qp833-mnc.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};
const content = `<defs><mask id="SVG5BFpLirz"><g class="aql7dnt-u"><path class="h6z-69bjv"/><path class="ond75zu1p"/><path class="hmg-5dugg"/><path class="qp833-mnc"/></g></mask></defs><path mask="url(#SVG5BFpLirz)" class="bl95smbeo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-twotone:resting"} {...others} />);
}

export default Component;
