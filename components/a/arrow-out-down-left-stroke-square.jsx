import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mssm-8b3t.css';
import '../../css/n/n5rw468eb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mssm-8b3t"/><path class="n5rw468eb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-out-down-left-stroke-square"} {...others} />);
}

export default Component;
