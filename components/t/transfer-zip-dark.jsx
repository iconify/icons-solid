import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnhb0dblg.css';
import '../../css/n/nd5uqlx5w.css';
import '../../css/o/os8fygsdg.css';
import '../../css/s/s16aoqb6n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="cnhb0dblg"/><path class="nd5uqlx5w"/><path class="os8fygsdg"/><path class="s16aoqb6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:transfer-zip-dark"} {...others} />);
}

export default Component;
