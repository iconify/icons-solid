import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d9vdhzb3o.css';
import '../../css/h/hdpb60b1b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d9vdhzb3o"/><path class="hdpb60b1b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:phone-ringing-loud-fill"} {...others} />);
}

export default Component;
