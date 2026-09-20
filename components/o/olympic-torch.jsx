import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-b6lmbqj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-b6lmbqj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:olympic-torch"} {...others} />);
}

export default Component;
