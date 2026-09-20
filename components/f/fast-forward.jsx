import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9-n5-bxs.css';

const viewBox = {"width":24,"height":24,"left":-1,"top":-3};
const content = `<path class="t9-n5-bxs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:fast-forward"} {...others} />);
}

export default Component;
