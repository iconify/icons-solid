import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti0_56jad.css';
import '../../css/c/c34z_sbtf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ti0_56jad"/><path class="c34z_sbtf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:stack-overflow-fill"} {...others} />);
}

export default Component;
