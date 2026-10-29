import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6yhojbtp.css';
import '../../css/i/i5kxfdb4q.css';
import '../../css/p/pm5qi7b0v.css';
import '../../css/f/fp1lbnbnr.css';
import '../../css/c/ceg7rtb7c.css';
import '../../css/g/gck2_dbal.css';
import '../../css/i/i0xbbfbrs.css';
import '../../css/k/k-x02s1po.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l6yhojbtp wm-shadow"/><path class="i5kxfdb4q wm-k"/><path class="pm5qi7b0v wm-k"/><path class="fp1lbnbnr wm-k"/><path class="ceg7rtb7c wm-k"/><path class="gck2_dbal wm-k"/><path class="i0xbbfbrs wm-shine"/><path class="k-x02s1po wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:git-pull-request-draft"} {...others} />);
}

export default Component;
