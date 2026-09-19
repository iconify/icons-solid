import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zi_m99bjs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zi_m99bjs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:star-off-fill"} {...others} />);
}

export default Component;
