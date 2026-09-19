import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e906i-3ln.css';
import '../../css/i/i6zfmwblj.css';
import '../../css/k/kod42bcng.css';
import '../../css/p/pv2s4tb3f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="e906i-3ln"/><path class="i6zfmwblj"/><path class="kod42bcng"/><path class="pv2s4tb3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:japanesecastle"} {...others} />);
}

export default Component;
