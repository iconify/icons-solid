import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x49svmbsw.css';
import '../../css/d/d510u6bjv.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="x49svmbsw"/><path class="d510u6bjv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:combobox"} {...others} />);
}

export default Component;
