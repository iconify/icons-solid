import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knti61bgf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="knti61bgf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:direction-up-right-2-fill"} {...others} />);
}

export default Component;
