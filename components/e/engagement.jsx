import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yrdhj80fb.css';
import '../../css/p/pob-y2b4c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yrdhj80fb"/><path class="pob-y2b4c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:engagement"} {...others} />);
}

export default Component;
