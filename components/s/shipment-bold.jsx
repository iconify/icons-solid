import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m4f9tbg5g.css';
import '../../css/v/v8p-pjnia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m4f9tbg5g"/><path class="v8p-pjnia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:shipment-bold"} {...others} />);
}

export default Component;
