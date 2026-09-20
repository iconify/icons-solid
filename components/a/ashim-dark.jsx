import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iebr1bctr.css';
import '../../css/r/rv1rqnb3e.css';
import '../../css/b/bote1bc2y.css';
import '../../css/p/pq2uk9bbl.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="iebr1bctr"/><path class="rv1rqnb3e"/><path class="bote1bc2y"/><path class="pq2uk9bbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ashim-dark"} {...others} />);
}

export default Component;
