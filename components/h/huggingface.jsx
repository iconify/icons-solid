import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xula-6ban.css';
import '../../css/v/vtz50zjpg.css';
import '../../css/z/zawp9sbpf.css';
import '../../css/k/k6jq5_i3t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xula-6ban"/><path class="vtz50zjpg"/><path class="zawp9sbpf"/><path class="k6jq5_i3t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:huggingface"} {...others} />);
}

export default Component;
