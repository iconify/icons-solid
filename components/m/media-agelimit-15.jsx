import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvn2jqbmx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvn2jqbmx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:media-agelimit-15"} {...others} />);
}

export default Component;
