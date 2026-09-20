import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nmf4p5-5i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nmf4p5-5i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:trophy-up-fill"} {...others} />);
}

export default Component;
