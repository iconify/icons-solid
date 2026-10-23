import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t-418ks0n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t-418ks0n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:kazakh-tenge"} {...others} />);
}

export default Component;
