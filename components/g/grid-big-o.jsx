import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xvhu34bmd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="xvhu34bmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:grid-big-o"} {...others} />);
}

export default Component;
