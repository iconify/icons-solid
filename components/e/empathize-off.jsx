import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hi2o-w3ro.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hi2o-w3ro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:empathize-off"} {...others} />);
}

export default Component;
