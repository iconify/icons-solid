import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arshk1byu.css';
import '../../css/a/azu3q-bot.css';
import '../../css/b/bvy4f-bps.css';
import '../../css/p/pjr1tfbta.css';
import '../../css/v/v4i2ew1ke.css';
import '../../css/q/qadltybwf.css';
import '../../css/g/gb14rjbkv.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="arshk1byu"/><path class="azu3q-bot"/><circle class="bvy4f-bps"/><circle class="pjr1tfbta"/><circle class="v4i2ew1ke"/><circle class="qadltybwf"/><circle class="gb14rjbkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:multistate"} {...others} />);
}

export default Component;
