import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lkb969b8t.css';
import '../../css/t/trm8ypqeu.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="lkb969b8t"/><path class="trm8ypqeu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:angle-double-right"} {...others} />);
}

export default Component;
