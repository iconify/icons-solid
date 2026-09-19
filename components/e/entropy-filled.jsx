import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lwyb6n-0h.css';
import '../../css/q/qo15eky2l.css';
import '../../css/f/fr80xwbvq.css';
import '../../css/y/yi3v55ama.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="lwyb6n-0h"/><circle class="qo15eky2l"/><circle class="fr80xwbvq"/><circle class="yi3v55ama"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:entropy-filled"} {...others} />);
}

export default Component;
