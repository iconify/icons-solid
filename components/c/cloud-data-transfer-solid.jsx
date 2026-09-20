import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mp56z7bhm.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="mp56z7bhm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:cloud-data-transfer-solid"} {...others} />);
}

export default Component;
