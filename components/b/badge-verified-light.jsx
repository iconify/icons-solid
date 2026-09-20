import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wvndr4bzf.css';
import '../../css/n/nifei5b0t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wvndr4bzf"/><path class="nifei5b0t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:badge-verified-light"} {...others} />);
}

export default Component;
