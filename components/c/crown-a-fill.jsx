import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xbv-3pwvy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xbv-3pwvy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:crown-a-fill"} {...others} />);
}

export default Component;
