import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-_f9rb9i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-_f9rb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:heart-diamond-solid"} {...others} />);
}

export default Component;
