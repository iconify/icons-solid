import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xx9xeebvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="xx9xeebvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:location-pin-off-fill"} {...others} />);
}

export default Component;
