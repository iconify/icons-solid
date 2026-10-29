import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v86ahybqi.css';
import '../../css/l/lr2ylubph.css';
import '../../css/e/e2n6ltb5p.css';
import '../../css/b/ba5rxbcob.css';
import '../../css/z/zdcv29bqb.css';
import '../../css/b/bk3tzdb6d.css';
import '../../css/v/vtsnw1ixp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v86ahybqi wm-shadow"/><path class="lr2ylubph"/><path class="e2n6ltb5p"/><path class="ba5rxbcob"/><path class="zdcv29bqb"/><path class="bk3tzdb6d wm-shine"/><path class="vtsnw1ixp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:check"} {...others} />);
}

export default Component;
