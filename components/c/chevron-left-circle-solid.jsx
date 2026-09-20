import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xqud1uhki.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xqud1uhki"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:chevron-left-circle-solid"} {...others} />);
}

export default Component;
