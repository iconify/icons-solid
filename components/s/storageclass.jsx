import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rdcnc9bhs.css';
import '../../css/x/xi2u7tbob.css';
import '../../css/p/pm-3w3biv.css';
import '../../css/z/z3aaribeu.css';
import '../../css/x/x6fqrpbdf.css';
import '../../css/z/zdjm-vh1z.css';
import '../../css/y/yjql_ibot.css';
import '../../css/r/rs9n2kbeu.css';
import '../../css/g/gfa0unznk.css';
import '../../css/e/evod8d3vs.css';

const viewBox = {"width":18.035,"height":17.5};
const content = `<path class="rdcnc9bhs"/><path class="xi2u7tbob"/><path class="pm-3w3biv"/><path class="z3aaribeu"/><path class="x6fqrpbdf"/><path class="zdjm-vh1z"/><path class="yjql_ibot"/><path class="rs9n2kbeu"/><path class="gfa0unznk"/><path class="evod8d3vs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"k8s:storageclass"} {...others} />);
}

export default Component;
