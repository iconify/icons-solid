import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h1sx3v3fk.css';

const viewBox = {"width":14,"height":16};
const content = `<path class="h1sx3v3fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:mail"} {...others} />);
}

export default Component;
