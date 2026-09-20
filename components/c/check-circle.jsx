import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/smbnb7bef.css';
import '../../css/p/pln5qlbcz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="smbnb7bef"/><path class="pln5qlbcz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:check-circle"} {...others} />);
}

export default Component;
