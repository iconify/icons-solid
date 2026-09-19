import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/irzz9_mlb.css';

const viewBox = {"width":960,"height":1024};
const content = `<path class="irzz9_mlb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:pivotx"} {...others} />);
}

export default Component;
