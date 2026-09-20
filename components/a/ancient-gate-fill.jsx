import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/suj0jjbik.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="suj0jjbik"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:ancient-gate-fill"} {...others} />);
}

export default Component;
