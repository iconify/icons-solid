import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egt7e-0qv.css';
import '../../css/z/z2q2hdbup.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="egt7e-0qv"/><path class="z2q2hdbup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:column-delete"} {...others} />);
}

export default Component;
