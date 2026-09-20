import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzv9idc7v.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="tzv9idc7v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pajamas:check-circle-filled"} {...others} />);
}

export default Component;
