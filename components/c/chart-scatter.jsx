import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hgpzimtyu.css';
import '../../css/q/qulyerb_t.css';
import '../../css/v/vddp-gbtw.css';
import '../../css/d/dpm5hf-1w.css';
import '../../css/u/umy3w9bnm.css';
import '../../css/a/ahbf3vjsr.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hgpzimtyu"/><circle class="qulyerb_t"/><circle class="vddp-gbtw"/><circle class="dpm5hf-1w"/><circle class="umy3w9bnm"/><circle class="ahbf3vjsr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:chart-scatter"} {...others} />);
}

export default Component;
