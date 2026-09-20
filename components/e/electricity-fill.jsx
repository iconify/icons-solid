import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o7kigfbhv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o7kigfbhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:electricity-fill"} {...others} />);
}

export default Component;
