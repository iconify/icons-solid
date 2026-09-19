import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxiwn8bvd.css';
import '../../css/b/barzez2jy.css';
import '../../css/j/jj9bo7dmt.css';
import '../../css/v/vxb-tcqtz.css';
import '../../css/a/a4_l8db9a.css';
import '../../css/t/t8sqs3ncp.css';

const viewBox = {"width":100,"height":100};
const content = `<path clip-rule="evenodd" class="rxiwn8bvd"/><path clip-rule="evenodd" class="barzez2jy"/><path clip-rule="evenodd" class="jj9bo7dmt"/><path clip-rule="evenodd" class="vxb-tcqtz"/><path clip-rule="evenodd" class="a4_l8db9a"/><path clip-rule="evenodd" class="t8sqs3ncp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:box"} {...others} />);
}

export default Component;
