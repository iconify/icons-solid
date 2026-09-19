import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u11ifk20b.css';

const viewBox = {"width":439,"height":512};
const content = `<path class="u11ifk20b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:asciidoc"} {...others} />);
}

export default Component;
