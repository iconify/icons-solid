import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojv1hdbuc.css';
import '../../css/a/ab03k5swc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ojv1hdbuc"/><path class="ab03k5swc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:rsshub-dark"} {...others} />);
}

export default Component;
