import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h03kt-8or.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="h03kt-8or"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:heading-6"} {...others} />);
}

export default Component;
