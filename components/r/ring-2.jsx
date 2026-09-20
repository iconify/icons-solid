import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ni54n970e.css';
import '../../css/f/faqc5pm2e.css';
import '../../css/c/c5vw4qy-a.css';
import '../../css/s/szsz-vbze.css';
import '../../css/x/x-o26083v.css';
import '../../css/w/w59sbcbsz.css';
import '../../css/s/sw7m2mhtr.css';
import '../../css/r/rdtp6cboy.css';
import '../../css/k/k7pm2ocyq.css';
import '../../css/f/fltsqjmyv.css';
import '../../css/p/p_8dambzf.css';
import '../../css/h/hp1ccfb-h.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ni54n970e"/><path class="faqc5pm2e"/><path class="c5vw4qy-a"/><path class="szsz-vbze"/><path class="x-o26083v"/><path class="w59sbcbsz"/><path class="sw7m2mhtr"/><path class="rdtp6cboy"/><path class="k7pm2ocyq"/><path class="fltsqjmyv"/><path class="p_8dambzf"/><path class="hp1ccfb-h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:ring-2"} {...others} />);
}

export default Component;
