import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lozn8dbkj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lozn8dbkj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:cake-1"} {...others} />);
}

export default Component;
