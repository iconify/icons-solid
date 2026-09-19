import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mb-tdob4r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mb-tdob4r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:radio-btn-active"} {...others} />);
}

export default Component;
