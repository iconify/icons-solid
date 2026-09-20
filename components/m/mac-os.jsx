import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gz_ly2pcv.css';

const viewBox = {"width":26,"height":26};
const content = `<path class="gz_ly2pcv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wpf:mac-os"} {...others} />);
}

export default Component;
