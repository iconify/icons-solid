import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-qdqubtd.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="b-qdqubtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"file-icons:asciidoctor"} {...others} />);
}

export default Component;
