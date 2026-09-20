import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z3rztpdiw.css';
import '../../css/l/l86idpbxk.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="z3rztpdiw"/><path class="l86idpbxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:chart-grid"} {...others} />);
}

export default Component;
