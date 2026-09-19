import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tozv2lbrl.css';
import '../../css/q/qk8hpubkt.css';
import '../../css/w/w51n_2blg.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="tozv2lbrl"/><path class="qk8hpubkt"/><path class="w51n_2blg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ant-design:fund-twotone"} {...others} />);
}

export default Component;
