import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke5xj4b2r.css';
import '../../css/u/u4w6z7bmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ke5xj4b2r"/><path class="u4w6z7bmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:ccv2"} {...others} />);
}

export default Component;
