import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qp2m2eqzd.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qp2m2eqzd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:shield-lock-fill"} {...others} />);
}

export default Component;
