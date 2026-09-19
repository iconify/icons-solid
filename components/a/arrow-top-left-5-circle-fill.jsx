import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n6gpl0b0a.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n6gpl0b0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-top-left-5-circle-fill"} {...others} />);
}

export default Component;
