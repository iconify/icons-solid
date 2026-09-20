import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ahu42d9pb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ahu42d9pb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"proicons:person-multiple"} {...others} />);
}

export default Component;
