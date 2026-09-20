import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gv017rgfy.css';
import '../../css/a/aefel7b-l.css';
import '../../css/a/a0ch81bxw.css';
import '../../css/w/w4-pptbax.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gv017rgfy"/><path class="aefel7b-l"/><path class="a0ch81bxw"/><path class="w4-pptbax"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:lidbrainz-light"} {...others} />);
}

export default Component;
