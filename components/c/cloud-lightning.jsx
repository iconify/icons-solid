import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k788n-8wd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="k788n-8wd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:cloud-lightning"} {...others} />);
}

export default Component;
