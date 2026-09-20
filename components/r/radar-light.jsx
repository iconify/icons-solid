import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uewj530ca.css';
import '../../css/t/tyfzm8ejq.css';
import '../../css/a/a3o4grs6z.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="uewj530ca"/><path class="tyfzm8ejq"/><path class="a3o4grs6z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:radar-light"} {...others} />);
}

export default Component;
