import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4tgbvbns.css';
import '../../css/o/o7g2p2-br.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t4tgbvbns"/><path class="o7g2p2-br"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:configuration-file-outlined"} {...others} />);
}

export default Component;
