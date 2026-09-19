import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/azvt5ojhn.css';
import '../../css/s/s69j4pb6w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="azvt5ojhn"/><path class="s69j4pb6w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eos-icons:stateful-set-outlined"} {...others} />);
}

export default Component;
