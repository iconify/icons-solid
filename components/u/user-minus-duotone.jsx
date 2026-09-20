import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f99tpmb6q.css';
import '../../css/e/ew-5e-iwx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f99tpmb6q"/><path class="ew-5e-iwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:user-minus-duotone"} {...others} />);
}

export default Component;
