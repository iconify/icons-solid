import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qxi5mew3h.css';
import '../../css/l/ljoz4662n.css';

const viewBox = {"width":26,"height":26};
const content = `<circle class="qxi5mew3h"/><circle class="ljoz4662n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:relationshape-message-26"} {...others} />);
}

export default Component;
