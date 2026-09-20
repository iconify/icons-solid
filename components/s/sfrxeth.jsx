import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s38dn_jaf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s38dn_jaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:sfrxeth"} {...others} />);
}

export default Component;
