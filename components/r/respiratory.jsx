import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grjwqbcjo.css';
import '../../css/t/tbbjvyiok.css';
import '../../css/u/ux3ufdb1r.css';

const viewBox = {"width":64,"height":64};
const content = `<path class="grjwqbcjo"/><path class="tbbjvyiok"/><path class="ux3ufdb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"medical-icon:respiratory"} {...others} />);
}

export default Component;
