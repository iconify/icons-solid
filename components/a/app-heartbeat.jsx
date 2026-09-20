import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ojvj-2bxz.css';
import '../../css/g/giecwuhng.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ojvj-2bxz ouiIcon__fillSecondary"/><path class="giecwuhng"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-heartbeat"} {...others} />);
}

export default Component;
