import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uymgdabjo.css';
import '../../css/x/x79_59blo.css';
import '../../css/v/v4u-w5b1v.css';
import '../../css/t/tbzygubyy.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uymgdabjo"/><path class="x79_59blo"/><path class="v4u-w5b1v"/><path class="tbzygubyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-emojis:backhand-index-pointing-up-2"} {...others} />);
}

export default Component;
