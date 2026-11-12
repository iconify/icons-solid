import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t7669jb6f.css';
import '../../css/h/hze02wt4y.css';

const viewBox = {"width":512,"height":512};
const content = `<rect class="t7669jb6f"/><path class="hze02wt4y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:plex"} {...others} />);
}

export default Component;
