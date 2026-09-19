import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hxv8z0l9j.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hxv8z0l9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icomoon-free:checkbox-checked"} {...others} />);
}

export default Component;
