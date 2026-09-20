import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1-exye0j.css';
import '../../css/i/i7h1uo08v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j1-exye0j"/><path class="i7h1uo08v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:monetize-light"} {...others} />);
}

export default Component;
