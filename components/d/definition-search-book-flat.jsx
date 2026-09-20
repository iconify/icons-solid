import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/we2m6qu7u.css';
import '../../css/g/gvqcqdbls.css';
import '../../css/l/ldrc7kton.css';
import '../../css/j/jilraqbnq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="we2m6qu7u"/><path clip-rule="evenodd" class="gvqcqdbls"/><path class="ldrc7kton"/><path clip-rule="evenodd" class="jilraqbnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:definition-search-book-flat"} {...others} />);
}

export default Component;
