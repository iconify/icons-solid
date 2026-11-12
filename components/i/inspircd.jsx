import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l954m5b7x.css';
import '../../css/l/lvqwy803y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l954m5b7x"/><path class="lvqwy803y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:inspircd"} {...others} />);
}

export default Component;
