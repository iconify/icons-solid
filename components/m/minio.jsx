import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ozigqchsx.css';
import '../../css/u/u4tpbbpvm.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ozigqchsx"/><path class="u4tpbbpvm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:minio"} {...others} />);
}

export default Component;
