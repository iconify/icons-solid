import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pmf4h2brv.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="pmf4h2brv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:business-card-solid"} {...others} />);
}

export default Component;
