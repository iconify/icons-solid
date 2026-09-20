import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fig7rt_5c.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="fig7rt_5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:shirt-1"} {...others} />);
}

export default Component;
