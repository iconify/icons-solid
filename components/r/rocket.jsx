import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxobl-b0u.css';
import '../../css/p/p42897ycd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rxobl-b0u"/><path class="p42897ycd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:rocket"} {...others} />);
}

export default Component;
