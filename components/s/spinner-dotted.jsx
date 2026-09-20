import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kcb9t62hz.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="kcb9t62hz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:spinner-dotted"} {...others} />);
}

export default Component;
