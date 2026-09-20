import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kqplhccxe.css';
import '../../css/m/m597sacji.css';

const viewBox = {"width":518,"height":518};
const content = `<path class="kqplhccxe"/><path class="m597sacji"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:yarn"} {...others} />);
}

export default Component;
