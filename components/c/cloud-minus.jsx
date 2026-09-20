import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/ba8lvwbib.css';
import '../../css/r/r9ontxjrg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ba8lvwbib"/><path class="r9ontxjrg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cloud-minus"} {...others} />);
}

export default Component;
