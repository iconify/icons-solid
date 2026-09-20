import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ac2-8hbbw.css';
import '../../css/l/lmsrdu7eq.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="ac2-8hbbw"/><path class="lmsrdu7eq"/><circle class="ac2-8hbbw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"typcn:anchor-outline"} {...others} />);
}

export default Component;
