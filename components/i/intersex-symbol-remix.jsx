import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cql54sgwy.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="cql54sgwy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:intersex-symbol-remix"} {...others} />);
}

export default Component;
