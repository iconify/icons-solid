import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve8ocsp6q.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ve8ocsp6q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bi:taxi-front-fill"} {...others} />);
}

export default Component;
