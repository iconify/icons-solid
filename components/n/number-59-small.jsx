import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hh7i4nfjl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hh7i4nfjl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:number-59-small"} {...others} />);
}

export default Component;
