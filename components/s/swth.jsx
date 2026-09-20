import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/josfqgbys.css';
import '../../css/k/kdmg_nq5y.css';
import '../../css/z/z6z3bobke.css';
import '../../css/u/uy3qgrkke.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="josfqgbys"/><path class="kdmg_nq5y"/><path class="z6z3bobke"/><path class="uy3qgrkke"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:swth"} {...others} />);
}

export default Component;
