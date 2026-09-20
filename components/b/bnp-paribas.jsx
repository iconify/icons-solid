import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmunhgz6s.css';
import '../../css/m/mv2f1fvox.css';
import '../../css/c/cgqt7gwti.css';

const viewBox = {"width":305.4,"height":49.966};
const content = `<path class="lmunhgz6s"/><path class="mv2f1fvox"/><path class="cgqt7gwti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:bnp-paribas"} {...others} />);
}

export default Component;
