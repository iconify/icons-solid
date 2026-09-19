import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pajg_d3no.css';
import '../../css/n/nwz75bygh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pajg_d3no"/><path class="nwz75bygh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:building-house-filled"} {...others} />);
}

export default Component;
