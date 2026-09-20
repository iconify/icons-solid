import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrz7kf1gc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yrz7kf1gc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:crown-light"} {...others} />);
}

export default Component;
