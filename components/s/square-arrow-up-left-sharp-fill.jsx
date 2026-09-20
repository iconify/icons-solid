import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k-0n92z7z.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k-0n92z7z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:square-arrow-up-left-sharp-fill"} {...others} />);
}

export default Component;
