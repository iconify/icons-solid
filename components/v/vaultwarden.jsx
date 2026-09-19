import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3ik2xb4v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l3ik2xb4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:vaultwarden"} {...others} />);
}

export default Component;
