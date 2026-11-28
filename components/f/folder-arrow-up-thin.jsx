import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sy18rac_x.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="sy18rac_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:folder-arrow-up-thin"} {...others} />);
}

export default Component;
