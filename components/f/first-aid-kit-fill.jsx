import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rb6i929xq.css';
import '../../css/i/iea0nmbht.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rb6i929xq"/><path class="iea0nmbht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:first-aid-kit-fill"} {...others} />);
}

export default Component;
