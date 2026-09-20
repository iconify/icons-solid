import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hn7-dbh4l.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hn7-dbh4l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:arrowalt"} {...others} />);
}

export default Component;
