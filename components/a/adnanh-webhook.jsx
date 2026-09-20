import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s06hljcsa.css';
import '../../css/b/b4hqx5wjx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="s06hljcsa"/><path class="b4hqx5wjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:adnanh-webhook"} {...others} />);
}

export default Component;
