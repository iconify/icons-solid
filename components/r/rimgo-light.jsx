import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q615-bq5v.css';
import '../../css/e/eb1q3ccfq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="q615-bq5v"/><circle class="eb1q3ccfq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rimgo-light"} {...others} />);
}

export default Component;
