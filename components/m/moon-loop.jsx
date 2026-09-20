import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cbt3qw.css';
import '../../css/g/gwaamo.css';
import '../../css/y/ydovum.css';
import '../../css/u/ud3ngs.css';
import '../../css/t/tiiyvt.css';
import '../../css/z/z52z6h.css';
import '../../css/s/so-from-56.css';
import '../../css/f/fade-d1si2b.css';
import '../../css/f/fade-6y6uho.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cbt3qw"/><path class="gwaamo ydovum"/><path class="ud3ngs ydovum"/><path class="tiiyvt ydovum"/><path class="ydovum z52z6h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:moon-loop"} {...others} />);
}

export default Component;
