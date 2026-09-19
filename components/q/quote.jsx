import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vte_uebsx.css';
import '../../css/s/s21yl5blf.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vte_uebsx"/><path class="s21yl5blf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:quote"} {...others} />);
}

export default Component;
