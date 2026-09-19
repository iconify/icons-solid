import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_b_x8p1s.css';
import '../../css/a/aiphr2b7y.css';
import '../../css/v/v1hs-27qp.css';
import '../../css/u/u-3sx8b9f.css';

const viewBox = {"width":32,"height":32};
const content = `<circle class="t_b_x8p1s"/><circle class="aiphr2b7y"/><circle class="v1hs-27qp"/><path class="u-3sx8b9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:pest"} {...others} />);
}

export default Component;
