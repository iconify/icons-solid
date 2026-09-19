import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a993kjvap.css';
import '../../css/n/nbgaxb16e.css';
import '../../css/s/scnb--21m.css';
import '../../css/r/rxw9xxy0h.css';
import '../../css/k/kg8x_io2q.css';

const viewBox = {"width":20,"height":20};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a993kjvap"/><path class="nbgaxb16e"/><path class="scnb--21m"/><path class="rxw9xxy0h"/><path class="kg8x_io2q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:move-x"} {...others} />);
}

export default Component;
