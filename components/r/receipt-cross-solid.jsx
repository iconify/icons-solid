import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d167ejb0s.css';
import '../../css/k/kxlmbqjiw.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="d167ejb0s"/><path class="kxlmbqjiw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:receipt-cross-solid"} {...others} />);
}

export default Component;
