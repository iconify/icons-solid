import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b3kt8y1qb.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="b3kt8y1qb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:shoe-prints"} {...others} />);
}

export default Component;
