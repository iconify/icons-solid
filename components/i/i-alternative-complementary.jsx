import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krumclx4i.css';
import '../../css/n/nvoqp-sdc.css';

const viewBox = {"width":65,"height":64};
const content = `<path class="krumclx4i"/><path class="nvoqp-sdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:i-alternative-complementary"} {...others} />);
}

export default Component;
