import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bu5p79zwm.css';
import '../../css/l/l34qd19yz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bu5p79zwm"/><path class="l34qd19yz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:radiation"} {...others} />);
}

export default Component;
