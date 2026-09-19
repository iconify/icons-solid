import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/epoweac4s.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="epoweac4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:dice-1"} {...others} />);
}

export default Component;
