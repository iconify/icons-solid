import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zaixgqb7g.css';
import '../../css/r/r-2sp9a4s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="zaixgqb7g"/><path class="r-2sp9a4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:teeth"} {...others} />);
}

export default Component;
