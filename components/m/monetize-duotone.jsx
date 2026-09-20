import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-v_mj_8z.css';
import '../../css/v/v4evbjbik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d-v_mj_8z"/><path class="v4evbjbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:monetize-duotone"} {...others} />);
}

export default Component;
