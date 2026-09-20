import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rihw6xbol.css';
import '../../css/e/epi033bwu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rihw6xbol"/><path class="epi033bwu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shopping-bag-duty-free-bold"} {...others} />);
}

export default Component;
