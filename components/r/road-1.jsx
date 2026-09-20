import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nl6h39t1z.css';
import '../../css/b/b9iubibxn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nl6h39t1z"/><path clip-rule="evenodd" class="b9iubibxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:road-1"} {...others} />);
}

export default Component;
