import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sp_nqwbll.css';
import '../../css/p/p99jesbkc.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="sp_nqwbll"/><path class="p99jesbkc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:start-cog"} {...others} />);
}

export default Component;
