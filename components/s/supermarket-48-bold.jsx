import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i_u3zdbvg.css';
import '../../css/q/qp6nmibfd.css';
import '../../css/i/ihmii9b0s.css';
import '../../css/l/lg9puybut.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i_u3zdbvg"/><path class="qp6nmibfd"/><path class="ihmii9b0s"/><path class="lg9puybut"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:supermarket-48-bold"} {...others} />);
}

export default Component;
