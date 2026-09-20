import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r-_u4j5sr.css';
import '../../css/n/n1mjunbsu.css';
import '../../css/z/zjlcq8qtg.css';
import '../../css/z/zo3fyrbzl.css';
import '../../css/g/g-kxtc9le.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="r-_u4j5sr"/><mask id="SVGwaBrFeRg" class="n1mjunbsu"><path class="zjlcq8qtg"/><path clip-rule="evenodd" class="zo3fyrbzl"/></mask><path mask="url(#SVGwaBrFeRg)" class="g-kxtc9le"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sms-16"} {...others} />);
}

export default Component;
