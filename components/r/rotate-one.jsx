import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o93lq-byo.css';
import '../../css/b/b_0d5acja.css';
import '../../css/c/cnglzpbpe.css';
import '../../css/f/fezbgdcig.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="o93lq-byo"><path class="b_0d5acja"/><path class="cnglzpbpe"/><circle class="fezbgdcig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:rotate-one"} {...others} />);
}

export default Component;
