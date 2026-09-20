import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/br-__gb2m.css';
import '../../css/a/a_399pbtf.css';
import '../../css/s/scjdmkghe.css';
import '../../css/h/h73mrwbie.css';
import '../../css/p/pgzmr_bif.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="br-__gb2m"/><path class="a_399pbtf"/><path class="scjdmkghe"/><path class="h73mrwbie"/><path class="pgzmr_bif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:whodb"} {...others} />);
}

export default Component;
