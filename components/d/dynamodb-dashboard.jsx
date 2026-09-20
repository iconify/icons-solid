import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vctvmtjcb.css';
import '../../css/a/a6eo7ib1a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vctvmtjcb"/><path class="a6eo7ib1a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:dynamodb-dashboard"} {...others} />);
}

export default Component;
