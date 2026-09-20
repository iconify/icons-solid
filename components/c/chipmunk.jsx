import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axmfribki.css';
import '../../css/s/skgitifwp.css';
import '../../css/v/vofhbxbct.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/h/hjq2j7bqt.css';
import '../../css/b/bzy10b-db.css';
import '../../css/c/cymou87jh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="axmfribki"/><path class="skgitifwp"/><path class="vofhbxbct"/><g class="jn8qy4bru"><path class="hjq2j7bqt"/><path class="bzy10b-db"/><path class="cymou87jh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:chipmunk"} {...others} />);
}

export default Component;
