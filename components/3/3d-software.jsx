import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hqf62mbvw.css';
import '../../css/r/rmzj1bb8t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hqf62mbvw"/><path class="rmzj1bb8t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:3d-software"} {...others} />);
}

export default Component;
