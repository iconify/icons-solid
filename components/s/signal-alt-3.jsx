import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o98xaoaxw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o98xaoaxw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uit:signal-alt-3"} {...others} />);
}

export default Component;
