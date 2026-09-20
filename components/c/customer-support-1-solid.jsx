import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c72y3bcyv.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="c72y3bcyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:customer-support-1-solid"} {...others} />);
}

export default Component;
