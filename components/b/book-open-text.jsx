import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cvr-psbly.css';
import '../../css/a/a7g-1ac_c.css';
import '../../css/f/fphmmcb3l.css';
import '../../css/r/r-yn89big.css';
import '../../css/o/oo3n5cqrn.css';
import '../../css/r/rncklth8r.css';
import '../../css/x/xm5ee9c8r.css';
import '../../css/l/lfb4v5blv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cvr-psbly wm-shadow"/><path class="a7g-1ac_c wm-k"/><path class="fphmmcb3l wm-k"/><path class="r-yn89big wm-k"/><path class="oo3n5cqrn wm-k"/><path class="rncklth8r wm-k"/><path class="wm-shine xm5ee9c8r"/><path class="lfb4v5blv wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:book-open-text"} {...others} />);
}

export default Component;
