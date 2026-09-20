import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zs39h7bpj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zs39h7bpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:collapse-all-outline"} {...others} />);
}

export default Component;
