import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttxo3u1js.css';
import '../../css/u/u99giob-v.css';
import '../../css/t/tcfp_5smf.css';
import '../../css/h/hrejwrbgb.css';
import '../../css/w/wu7c3x_tx.css';
import '../../css/d/d_mqyac1w.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="ttxo3u1js"/><circle class="u99giob-v"/><circle class="tcfp_5smf"/><rect class="hrejwrbgb"/><rect class="wu7c3x_tx"/><rect class="d_mqyac1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:list-fill"} {...others} />);
}

export default Component;
