import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xt6nv_bqo.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="xt6nv_bqo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:document-certificate-solid"} {...others} />);
}

export default Component;
