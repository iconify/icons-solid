import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d-ng6m2uq.css';
import '../../css/j/j87piqd4o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d-ng6m2uq"/><path class="j87piqd4o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:cheese"} {...others} />);
}

export default Component;
