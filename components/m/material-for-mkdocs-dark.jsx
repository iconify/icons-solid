import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s_sn15ygy.css';
import '../../css/k/kop8xd26a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s_sn15ygy"/><path class="kop8xd26a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:material-for-mkdocs-dark"} {...others} />);
}

export default Component;
