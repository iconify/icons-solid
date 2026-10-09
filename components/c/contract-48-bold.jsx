import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gb7o8wq_f.css';
import '../../css/v/vh4ifyb5r.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="gb7o8wq_f"/><path class="vh4ifyb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:contract-48-bold"} {...others} />);
}

export default Component;
