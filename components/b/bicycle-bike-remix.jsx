import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v_vz_ub6n.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="v_vz_ub6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:bicycle-bike-remix"} {...others} />);
}

export default Component;
