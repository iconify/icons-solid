import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cdwzo6u-v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cdwzo6u-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:code-less-than"} {...others} />);
}

export default Component;
