import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kwt8xvbri.css';
import '../../css/f/fwo3rh0_l.css';
import '../../css/j/joy8r5bgb.css';
import '../../css/o/oofcnubhr.css';
import '../../css/s/slvste9vd.css';
import '../../css/t/tizzlidnt.css';
import '../../css/p/p2jwk0blw.css';
import '../../css/y/ykgi9_bix.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="kwt8xvbri"/><path class="fwo3rh0_l"/><path class="joy8r5bgb"/><path class="oofcnubhr"/><path class="slvste9vd"/><path class="tizzlidnt"/><path class="p2jwk0blw"/><path class="ykgi9_bix"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:newspaper"} {...others} />);
}

export default Component;
