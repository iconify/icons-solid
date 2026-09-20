import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w749n6bnv.css';

const viewBox = {"width":24,"height":24,"left":-5,"top":-2};
const content = `<path class="w749n6bnv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:glass-filled-f"} {...others} />);
}

export default Component;
