import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s684qkqgc.css';
import '../../css/g/g_3przbai.css';
import '../../css/x/xu_goixyk.css';
import '../../css/i/irwfctnju.css';
import '../../css/l/ly6v3nbkd.css';
import '../../css/g/gy1o2w38c.css';
import '../../css/m/m8p7zbc6g.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="s684qkqgc"/><path class="g_3przbai"/><path class="xu_goixyk"/><path class="irwfctnju"/><path class="ly6v3nbkd"/><path class="gy1o2w38c"/><path class="m8p7zbc6g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:basketball"} {...others} />);
}

export default Component;
