import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea87w3l9f.css';
import '../../css/a/a59njwb5r.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ea87w3l9f"/><path class="a59njwb5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:visual-studio-code-light"} {...others} />);
}

export default Component;
