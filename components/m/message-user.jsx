import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i1u8bfmde.css';

const viewBox = {"width":22,"height":22};
const content = `<path class="i1u8bfmde"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"memory:message-user"} {...others} />);
}

export default Component;
