import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rboh__cca.css';
import '../../css/e/eqa66fgki.css';
import '../../css/c/cpgl-6bff.css';
import '../../css/s/s355jjnql.css';
import '../../css/f/fzc0v4b0l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="rboh__cca"/><path class="eqa66fgki"/><path class="cpgl-6bff"/><path class="s355jjnql"/><path class="fzc0v4b0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:headphones-off"} {...others} />);
}

export default Component;
