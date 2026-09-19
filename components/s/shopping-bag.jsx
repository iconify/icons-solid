import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aags1jb7a.css';
import '../../css/f/fve51_hdk.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="aags1jb7a"/><path class="fve51_hdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:shopping-bag"} {...others} />);
}

export default Component;
