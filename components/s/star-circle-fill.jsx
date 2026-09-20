import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s-flpfq5e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s-flpfq5e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:star-circle-fill"} {...others} />);
}

export default Component;
