import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gl97u05kj.css';
import '../../css/s/sw88dhbln.css';
import '../../css/v/v_ibdbb9j.css';
import '../../css/i/iej2lrbam.css';
import '../../css/e/emxmx6b_d.css';
import '../../css/b/bry4-ccmm.css';
import '../../css/k/k055yumjg.css';
import '../../css/p/poweqvbqy.css';
import '../../css/o/o9soweyks.css';
import '../../css/p/pkb394odx.css';
import '../../css/b/bh7yu1bkb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gl97u05kj wm-shadow"/><path class="sw88dhbln wm-k"/><path class="v_ibdbb9j wm-k"/><path class="iej2lrbam wm-k"/><path class="emxmx6b_d wm-k"/><path class="bry4-ccmm wm-shine"/><path class="k055yumjg wm-a"/><path class="poweqvbqy wm-a"/><path class="o9soweyks wm-a"/><path class="pkb394odx wm-a"/><path class="bh7yu1bkb wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:a-large-small"} {...others} />);
}

export default Component;
