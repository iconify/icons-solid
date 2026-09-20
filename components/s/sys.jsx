import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bz1pwcbyv.css';
import '../../css/n/nyd7drbdm.css';
import '../../css/d/dyces3hqx.css';
import '../../css/q/qfaikbcyt.css';
import '../../css/a/aka35hb7t.css';
import '../../css/a/a21e8f75v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="bz1pwcbyv"/><path class="nyd7drbdm"/><path class="dyces3hqx"/><path class="qfaikbcyt"/><path class="aka35hb7t"/><path class="a21e8f75v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sys"} {...others} />);
}

export default Component;
