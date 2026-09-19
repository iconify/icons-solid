import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p-jbc412p.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="p-jbc412p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:rectangle-stack-fill-badge-person-crop"} {...others} />);
}

export default Component;
