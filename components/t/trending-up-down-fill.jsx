import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma6hw-ozv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ma6hw-ozv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:trending-up-down-fill"} {...others} />);
}

export default Component;
