import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yn_jkz6ov.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yn_jkz6ov"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:circle-dashed-letter-m"} {...others} />);
}

export default Component;
