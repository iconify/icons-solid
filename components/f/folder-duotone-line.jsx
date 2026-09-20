import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/j/jayohlbpc.css';
import '../../css/g/gqkpcf_4j.css';

const viewBox = {"width":24,"height":24};
const content = `<mask id="SVGzFHJzbhZ" class="n1mjunbsu"><path class="jayohlbpc"/></mask><path mask="url(#SVGzFHJzbhZ)" class="gqkpcf_4j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-duotone-line"} {...others} />);
}

export default Component;
