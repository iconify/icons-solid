import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvt85_2nh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvt85_2nh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:text-align-justify"} {...others} />);
}

export default Component;
