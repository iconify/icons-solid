import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/htkz26b2v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="htkz26b2v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:expand-dashed-down-right-sharp-fill"} {...others} />);
}

export default Component;
