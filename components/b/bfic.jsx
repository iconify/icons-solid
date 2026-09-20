import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v1gqmmbxi.css';
import '../../css/n/nzl6tpgjh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="v1gqmmbxi"/><path class="nzl6tpgjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:bfic"} {...others} />);
}

export default Component;
