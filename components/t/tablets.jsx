import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eugt4cqou.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eugt4cqou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:tablets"} {...others} />);
}

export default Component;
