import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qn9fkv6ic.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="qn9fkv6ic"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:link-broken-alt-01"} {...others} />);
}

export default Component;
