import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b01z6tb3b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b01z6tb3b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:circle-check-sharp-fill"} {...others} />);
}

export default Component;
