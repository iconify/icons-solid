import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gy0z5bcpu.css';
import '../../css/o/ol75fg2fk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gy0z5bcpu"/><path class="ol75fg2fk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:sign-in-fill"} {...others} />);
}

export default Component;
