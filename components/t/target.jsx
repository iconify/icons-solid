import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yvzhpnn4z.css';
import '../../css/l/ljp4sfbmu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yvzhpnn4z"/><path class="ljp4sfbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:target"} {...others} />);
}

export default Component;
