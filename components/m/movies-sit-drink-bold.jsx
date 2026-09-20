import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lx3y42bar.css';
import '../../css/b/bub6_kbew.css';
import '../../css/f/f9dyx4nnp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lx3y42bar"/><path class="bub6_kbew"/><path class="f9dyx4nnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:movies-sit-drink-bold"} {...others} />);
}

export default Component;
