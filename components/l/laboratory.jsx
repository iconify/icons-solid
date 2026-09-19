import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o4hrb0bhl.css';
import '../../css/e/ekp95gbqz.css';

const viewBox = {"width":23,"height":24};
const content = `<path class="o4hrb0bhl"/><path class="ekp95gbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:laboratory"} {...others} />);
}

export default Component;
