import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/d/d9rbyu3nx.css';
import '../../css/f/flen3tbdj.css';
import '../../css/t/t1i8eebpo.css';
import '../../css/y/ykhh1jp9i.css';

const viewBox = {"width":32,"height":32};
const content = `<mask id="SVGwjo0bdvJ" class="n1mjunbsu"><path class="d9rbyu3nx"/></mask><g class="flen3tbdj"><path class="t1i8eebpo"/><path mask="url(#SVGwjo0bdvJ)" class="ykhh1jp9i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:info"} {...others} />);
}

export default Component;
