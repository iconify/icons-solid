import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/urkx-c35c.css';
import '../../css/k/kwzja8bzb.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="urkx-c35c"/><path class="kwzja8bzb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-pipe-open"} {...others} />);
}

export default Component;
