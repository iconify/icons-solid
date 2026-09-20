import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ke1-0sh6u.css';
import '../../css/n/n0qm8zbwd.css';
import '../../css/t/tbzygubyy.css';
import '../../css/u/uymgdabjo.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ke1-0sh6u"/><path class="n0qm8zbwd"/><path class="tbzygubyy"/><path class="uymgdabjo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:backhand-index-pointing-up-1"} {...others} />);
}

export default Component;
