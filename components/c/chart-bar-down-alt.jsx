import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dn5ygw8-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="dn5ygw8-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:chart-bar-down-alt"} {...others} />);
}

export default Component;
