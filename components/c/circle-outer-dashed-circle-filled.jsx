import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krwo12_et.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="krwo12_et"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:circle-outer-dashed-circle-filled"} {...others} />);
}

export default Component;
