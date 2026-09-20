import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4dk4o63l.css';
import '../../css/r/rit0h486c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p4dk4o63l"/><path class="rit0h486c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:phone-cancel-fill"} {...others} />);
}

export default Component;
