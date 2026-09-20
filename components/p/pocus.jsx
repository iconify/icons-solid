import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uij4f5b-x.css';
import '../../css/f/f7f__c0js.css';
import '../../css/v/vjilnacka.css';

const viewBox = {"width":126,"height":31};
const content = `<g class="uij4f5b-x"><path class="f7f__c0js"/><path class="vjilnacka"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:pocus"} {...others} />);
}

export default Component;
