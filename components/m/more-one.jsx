import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-a1t9yth.css';
import '../../css/m/mprl4mbnb.css';
import '../../css/c/chpyfs2is.css';

const viewBox = {"width":48,"height":48};
const content = `<circle class="c-a1t9yth"/><circle class="mprl4mbnb"/><circle class="chpyfs2is"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:more-one"} {...others} />);
}

export default Component;
