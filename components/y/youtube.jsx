import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v--2xbb1l.css';
import '../../css/u/u-db7hb-g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="v--2xbb1l"/><path class="u-db7hb-g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:youtube"} {...others} />);
}

export default Component;
