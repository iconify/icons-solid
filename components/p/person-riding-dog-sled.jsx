import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eo6ivfpgc.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="eo6ivfpgc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:person-riding-dog-sled"} {...others} />);
}

export default Component;
