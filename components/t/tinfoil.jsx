import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wk7wtbc2i.css';
import '../../css/t/tqqkmcc0y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="wk7wtbc2i"/><path class="tqqkmcc0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:tinfoil"} {...others} />);
}

export default Component;
