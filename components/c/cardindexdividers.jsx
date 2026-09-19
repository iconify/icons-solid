import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rbhakgbzs.css';
import '../../css/o/oja5rwz9i.css';
import '../../css/l/l36n89b8l.css';
import '../../css/u/u9th8bbss.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rbhakgbzs"/><path class="oja5rwz9i"/><path class="l36n89b8l"/><path class="u9th8bbss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:cardindexdividers"} {...others} />);
}

export default Component;
