import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tk6mrwbwh.css';
import '../../css/e/ehn9ppzlr.css';
import '../../css/j/jpbcbrl-a.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="tk6mrwbwh"/><path class="ehn9ppzlr"/><path class="jpbcbrl-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:livescript"} {...others} />);
}

export default Component;
