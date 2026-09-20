import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8an-8bsw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f8an-8bsw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:activity-square-solid"} {...others} />);
}

export default Component;
