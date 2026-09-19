import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fdqndac6f.css';
import '../../css/u/ulfd5d-am.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="fdqndac6f"/><circle class="ulfd5d-am"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:ios-nuclear"} {...others} />);
}

export default Component;
