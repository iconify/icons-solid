import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbqi1ub-j.css';
import '../../css/b/bfj6lrbfk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lbqi1ub-j"/><path class="bfj6lrbfk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:safety-warning-radioactive-bold"} {...others} />);
}

export default Component;
