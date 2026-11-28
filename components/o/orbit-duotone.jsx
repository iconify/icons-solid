import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qpk7p9tnz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary qpk7p9tnz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:orbit-duotone"} {...others} />);
}

export default Component;
