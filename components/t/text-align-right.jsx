import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kjo5wgb5v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kjo5wgb5v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:text-align-right"} {...others} />);
}

export default Component;
