import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/biu_qybno.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-4};
const content = `<path class="biu_qybno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:twitter"} {...others} />);
}

export default Component;
