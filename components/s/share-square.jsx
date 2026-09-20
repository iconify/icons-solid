import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvke21biv.css';
import '../../css/y/y__gdjb1a.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="rvke21biv"/><path class="y__gdjb1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:share-square"} {...others} />);
}

export default Component;
