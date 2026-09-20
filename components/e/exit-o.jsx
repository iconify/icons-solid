import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s4yb8v8ih.css';
import '../../css/u/u-uywrbac.css';
import '../../css/g/gzifgrbtd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="s4yb8v8ih"/><path class="u-uywrbac"/><path class="gzifgrbtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:exit-o"} {...others} />);
}

export default Component;
