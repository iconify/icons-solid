import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ah8g6_bii.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ah8g6_bii"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:shopping-bag-fill"} {...others} />);
}

export default Component;
