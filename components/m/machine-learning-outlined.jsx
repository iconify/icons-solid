import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nkpc5jbgg.css';
import '../../css/p/phkynijtd.css';
import '../../css/d/d1ym2h3ya.css';
import '../../css/r/rd_oh8biv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nkpc5jbgg"/><path class="phkynijtd"/><circle class="d1ym2h3ya"/><path class="rd_oh8biv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:machine-learning-outlined"} {...others} />);
}

export default Component;
