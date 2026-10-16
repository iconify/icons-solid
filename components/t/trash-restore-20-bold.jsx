import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cjn6js2sa.css';
import '../../css/h/h0pvggihj.css';
import '../../css/i/i8jjk1tki.css';
import '../../css/t/t_qw8s3ib.css';
import '../../css/j/jlfhq0b_p.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="cjn6js2sa"/><path class="h0pvggihj"/><path class="i8jjk1tki"/><path class="t_qw8s3ib"/><path class="jlfhq0b_p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:trash-restore-20-bold"} {...others} />);
}

export default Component;
