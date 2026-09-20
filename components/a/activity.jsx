import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_x287pks.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a_x287pks"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:activity"} {...others} />);
}

export default Component;
