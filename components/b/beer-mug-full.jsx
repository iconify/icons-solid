import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xfzc_4bcf.css';
import '../../css/x/x645877qp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xfzc_4bcf"/><path class="x645877qp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circum:beer-mug-full"} {...others} />);
}

export default Component;
