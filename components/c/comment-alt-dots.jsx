import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edegqlkpr.css';
import '../../css/a/a1ldf12-h.css';
import '../../css/q/qod0rfb7x.css';
import '../../css/m/ml61terwk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="edegqlkpr"/><circle class="a1ldf12-h"/><circle class="qod0rfb7x"/><circle class="ml61terwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:comment-alt-dots"} {...others} />);
}

export default Component;
