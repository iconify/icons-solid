import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a17etlsmp.css';
import '../../css/g/g015acbcu.css';
import '../../css/m/mnelrmb_n.css';
import '../../css/w/wcp-8_b0l.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a17etlsmp"/><path clip-rule="evenodd" class="g015acbcu"/><path clip-rule="evenodd" class="mnelrmb_n"/><path clip-rule="evenodd" class="wcp-8_b0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:git-fork-bold-duotone"} {...others} />);
}

export default Component;
