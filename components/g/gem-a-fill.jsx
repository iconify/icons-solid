import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j8bf1t8kc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j8bf1t8kc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:gem-a-fill"} {...others} />);
}

export default Component;
