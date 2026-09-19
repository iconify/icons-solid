import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwyplh1_p.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jwyplh1_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxs:purchase-tag"} {...others} />);
}

export default Component;
