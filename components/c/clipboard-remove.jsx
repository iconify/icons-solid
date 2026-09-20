import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lsmf7uamc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="lsmf7uamc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:clipboard-remove"} {...others} />);
}

export default Component;
