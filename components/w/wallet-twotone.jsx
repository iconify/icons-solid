import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gusc8fh9m.css';
import '../../css/p/pzzrm0a9w.css';
import '../../css/r/rvi4blbjl.css';
import '../../css/i/inwbjmbwl.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="gusc8fh9m"/><path class="pzzrm0a9w"/><path class="rvi4blbjl"/><path class="inwbjmbwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:wallet-twotone"} {...others} />);
}

export default Component;
