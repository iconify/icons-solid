import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8nb3i--r.css';
import '../../css/m/m3w96hble.css';
import '../../css/y/yvkzvdbqw.css';
import '../../css/s/sfuacrboc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g8nb3i--r"/><path class="m3w96hble"/><path class="yvkzvdbqw"/><path class="sfuacrboc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:photography-focus-flower"} {...others} />);
}

export default Component;
