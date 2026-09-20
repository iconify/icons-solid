import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xp39-b6it.css';
import '../../css/f/f72i5tbxt.css';
import '../../css/k/kl2jsebar.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xp39-b6it"/><path class="f72i5tbxt"/><circle class="kl2jsebar"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:bell-pin-fill"} {...others} />);
}

export default Component;
