import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jre1oib0e.css';
import '../../css/v/vdbqspb8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jre1oib0e"/><path class="vdbqspb8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:paste"} {...others} />);
}

export default Component;
