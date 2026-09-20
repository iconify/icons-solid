import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dk75-jb2c.css';
import '../../css/b/boxkj20aw.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="dk75-jb2c"/><path class="boxkj20aw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:external-browser"} {...others} />);
}

export default Component;
