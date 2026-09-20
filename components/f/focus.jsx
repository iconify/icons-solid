import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/j/jgl72-pgt.css';
import '../../css/f/flen3tbdj.css';
import '../../css/w/w5ceo1k1j.css';
import '../../css/s/sw8bwnbda.css';

const viewBox = {"width":32,"height":32};
const content = `<mask id="SVGbyN7QdEZ" class="n1mjunbsu"><path class="jgl72-pgt"/></mask><g class="flen3tbdj"><path class="w5ceo1k1j"/><path mask="url(#SVGbyN7QdEZ)" class="sw8bwnbda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"quill:focus"} {...others} />);
}

export default Component;
