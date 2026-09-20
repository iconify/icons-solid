import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/emfpa0b7n.css';

const viewBox = {"width":50,"height":50};
const content = `<path class="emfpa0b7n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"temaki:ski-jumping"} {...others} />);
}

export default Component;
