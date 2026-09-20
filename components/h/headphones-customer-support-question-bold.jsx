import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m7kvpk4yq.css';
import '../../css/a/amdm5y4pg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m7kvpk4yq"/><path class="amdm5y4pg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:headphones-customer-support-question-bold"} {...others} />);
}

export default Component;
