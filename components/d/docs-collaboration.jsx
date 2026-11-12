import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r_8s107tv.css';
import '../../css/e/e8df_acjv.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="r_8s107tv"/><path class="e8df_acjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:docs-collaboration"} {...others} />);
}

export default Component;
