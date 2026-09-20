import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rwssri5sf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rwssri5sf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-more-horizontal-sharp-fill"} {...others} />);
}

export default Component;
