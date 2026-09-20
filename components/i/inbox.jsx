import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma7pcqbpv.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ma7pcqbpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"la:inbox"} {...others} />);
}

export default Component;
