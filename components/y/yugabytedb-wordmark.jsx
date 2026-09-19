import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef-yoed_f.css';
import '../../css/y/ymnh-3b0c.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ef-yoed_f"/><path class="ymnh-3b0c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:yugabytedb-wordmark"} {...others} />);
}

export default Component;
