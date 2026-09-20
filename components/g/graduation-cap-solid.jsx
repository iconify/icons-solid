import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mysg7cy2i.css';
import '../../css/j/juxl4d1ut.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mysg7cy2i"/><path class="juxl4d1ut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:graduation-cap-solid"} {...others} />);
}

export default Component;
