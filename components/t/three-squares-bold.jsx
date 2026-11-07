import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u--1m-bou.css';
import '../../css/v/vidg63bsd.css';
import '../../css/p/pocrugbev.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u--1m-bou"/><path class="vidg63bsd"/><path class="pocrugbev"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:three-squares-bold"} {...others} />);
}

export default Component;
