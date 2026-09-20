import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gfqm7soid.css';
import '../../css/b/bdvisdbqa.css';
import '../../css/d/dg056mb7w.css';
import '../../css/n/ny0pa7b_z.css';
import '../../css/j/judwtlb-z.css';
import '../../css/p/p8ekenbjc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gfqm7soid"/><path class="bdvisdbqa"/><path class="dg056mb7w"/><path class="ny0pa7b_z"/><path class="judwtlb-z"/><path class="p8ekenbjc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:habitat-social"} {...others} />);
}

export default Component;
