import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t3309_2rv.css';
import '../../css/n/n60jv4b6k.css';
import '../../css/h/hhc0tgbyt.css';
import '../../css/d/dwfzbqb4m.css';
import '../../css/o/o97ku8yzj.css';
import '../../css/i/i7r0h4bga.css';

const viewBox = {"width":323,"height":323};
const content = `<path class="t3309_2rv"/><path class="n60jv4b6k"/><path class="hhc0tgbyt"/><path class="dwfzbqb4m"/><path class="o97ku8yzj"/><path class="i7r0h4bga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:elm"} {...others} />);
}

export default Component;
