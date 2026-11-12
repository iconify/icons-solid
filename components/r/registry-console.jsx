import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jc17ftbpa.css';
import '../../css/l/l-_0lnqbf.css';
import '../../css/p/pdfna0aet.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jc17ftbpa"/><path class="l-_0lnqbf"/><path class="pdfna0aet"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:registry-console"} {...others} />);
}

export default Component;
