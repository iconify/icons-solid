import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mvm2q8ssv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mvm2q8ssv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-icons:akaunting"} {...others} />);
}

export default Component;
