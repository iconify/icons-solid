import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lo6-b-g-q.css';
import '../../css/u/ug9pg4zkx.css';

const viewBox = {"width":22,"height":24};
const content = `<path class="lo6-b-g-q"/><path class="ug9pg4zkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:paralysis-disability"} {...others} />);
}

export default Component;
