import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bypt6tfji.css';
import '../../css/t/tpo-q54ny.css';
import '../../css/m/megpyvbvn.css';
import '../../css/g/gyexd6ugj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="bypt6tfji"/><path class="tpo-q54ny"/><path clip-rule="evenodd" class="megpyvbvn"/><path clip-rule="evenodd" class="gyexd6ugj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:iammeter-light"} {...others} />);
}

export default Component;
