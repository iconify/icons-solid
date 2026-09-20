import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fabh_rbkv.css';
import '../../css/g/gh1c2r79w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fabh_rbkv"/><path class="gh1c2r79w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:search-plus"} {...others} />);
}

export default Component;
