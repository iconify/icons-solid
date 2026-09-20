import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p60eapvkt.css';
import '../../css/p/pqzlykbsi.css';
import '../../css/r/r306avbbq.css';
import '../../css/r/r7fu50bys.css';
import '../../css/d/dr9i5ncll.css';
import '../../css/l/lie1g2bcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p60eapvkt"/><path class="pqzlykbsi"/><path class="r306avbbq"/><path class="r7fu50bys"/><path class="dr9i5ncll"/><path class="lie1g2bcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:dent"} {...others} />);
}

export default Component;
