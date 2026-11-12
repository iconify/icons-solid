import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nc25tg1zz.css';
import '../../css/b/bst9txban.css';
import '../../css/k/k8boz-k8c.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nc25tg1zz"/><path class="bst9txban"/><path class="k8boz-k8c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:domainmod-dark"} {...others} />);
}

export default Component;
