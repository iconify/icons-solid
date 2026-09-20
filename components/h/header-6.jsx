import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohcqs1rls.css';

const viewBox = {"width":24,"height":24,"left":-4.5,"top":-7};
const content = `<path class="ohcqs1rls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:header-6"} {...others} />);
}

export default Component;
