import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t9ftu10bs.css';

const viewBox = {"width":1664,"height":1568};
const content = `<path class="t9ftu10bs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:dropbox"} {...others} />);
}

export default Component;
