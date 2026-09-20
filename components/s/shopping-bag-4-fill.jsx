import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msney2gri.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="msney2gri"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:shopping-bag-4-fill"} {...others} />);
}

export default Component;
