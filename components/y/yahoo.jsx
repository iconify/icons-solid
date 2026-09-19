import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/re-sap6xo.css';

const viewBox = {"width":464,"height":448};
const content = `<path class="re-sap6xo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ps:yahoo"} {...others} />);
}

export default Component;
