import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t4xcodbxl.css';
import '../../css/x/xsfik-bys.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t4xcodbxl"/><path class="xsfik-bys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:barn-duotone"} {...others} />);
}

export default Component;
