import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0zh2bb8f.css';
import '../../css/t/tnm3gqoro.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="s0zh2bb8f"/><path class="tnm3gqoro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:files-20"} {...others} />);
}

export default Component;
