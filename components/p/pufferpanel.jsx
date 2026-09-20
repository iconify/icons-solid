import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m21fiubni.css';
import '../../css/j/j3h0ykbux.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m21fiubni"/><path class="j3h0ykbux"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pufferpanel"} {...others} />);
}

export default Component;
