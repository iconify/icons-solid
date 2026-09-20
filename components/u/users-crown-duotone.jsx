import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcna0htye.css';
import '../../css/e/et2ofsb-x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mcna0htye"/><path class="et2ofsb-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:users-crown-duotone"} {...others} />);
}

export default Component;
