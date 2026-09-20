import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w9r4e7esb.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="w9r4e7esb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:football-solid"} {...others} />);
}

export default Component;
