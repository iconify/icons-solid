import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bu2_0m1vg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bu2_0m1vg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:donut-bitten-outline"} {...others} />);
}

export default Component;
