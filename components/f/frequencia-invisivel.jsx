import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zaen6ivzp.css';
import '../../css/t/tz73pbbpp.css';

const viewBox = {"width":719.14,"height":165.69};
const content = `<path class="zaen6ivzp"/><path class="tz73pbbpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:frequencia-invisivel"} {...others} />);
}

export default Component;
