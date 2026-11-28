import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axvkndb_w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="axvkndb_w primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:route-x-duotone"} {...others} />);
}

export default Component;
